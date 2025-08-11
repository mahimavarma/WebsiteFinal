import { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const App = () => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        if (data?.country) {
          console.log('Country from IP:', data.country);
          setCountryCode(data.country);
          setPhone(data.country_calling_code || '');
        } else {
          console.error('Country data missing from response:', data);
        }
      } catch (err) {
        console.error('Error fetching IP info:', err);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      <PhoneInput
        defaultCountry={countryCode}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default App;
