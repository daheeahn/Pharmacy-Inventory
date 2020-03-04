import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Text, View} from 'react-native';

import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: pink;
`;

const CalloutContainer = styled.View`
  width: 200px;
`;

const CalloutText = styled.Text``;

const GoogleMap = ({style, pharmacyInfos}) => {
  return (
    <Container style={style}>
      <MapView
        style={{
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.805492,
          longitude: 127.059307,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0411,
        }}>
        {pharmacyInfos?.map(item => {
          console.log('item', item);
          const {XPos, YPos, addr} = item;
          return (
            <Marker
              key={addr}
              onPress={() => {}}
              coordinate={{latitude: YPos, longitude: XPos}}>
              <View style={{width: 10, height: 10, backgroundColor: 'green'}} />

              <Callout>
                <CalloutContainer>
                  <CalloutText>{addr}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </Container>
  );
};

export default GoogleMap;
