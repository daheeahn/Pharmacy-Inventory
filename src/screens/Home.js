import {API_KEY, API_URL} from '../api/api';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import GoogleMap from '../components/GoogleMap';

const Home = ({navigation}) => {
  const [pharmacyInfos, setPharmacyInfos] = useState(null);

  const getPharmacyInfos = async () => {
    const res = await fetch(`${API_URL}?ServiceKey=${API_KEY}&_type=json`);
    const {
      response: {body: items},
    } = await res.json();
    setPharmacyInfos(items.items.item);
  };

  useEffect(() => {
    getPharmacyInfos();
    return () => {
      //
    };
  }, []);

  console.log('pharmacyInfos', pharmacyInfos);

  return (
    <>
      <GoogleMap pharmacyInfos={pharmacyInfos} />
    </>
  );
};

export default Home;
