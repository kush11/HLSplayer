import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import TextTicker from 'react-native-text-ticker'
import VideoPlayer from 'react-native-video-controls';
import styled from "styled-components/native";
const { width, height } = Dimensions.get("screen");
export default class App extends PureComponent {  

  render() {
    console.log(height)
    return (
      <View style={{ flex: 1 }}>
        <VideoPlayer
          source={{ uri: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' }}
          onBack={() => console.log('back')}
        />
        <Wrapper>
          <TextTicker
            style={{ fontSize: 24 }}
            duration={4000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}
          >
            Scroll Text Scroll Text Scroll Text Scroll Text Scroll Text Scroll Text Scroll Text Scroll Text Scroll Text
        </TextTicker>
        </Wrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    backgroundColor: '#7575'
  }
});

// styled-component

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  position:absolute;
  bottom:${height/10};
  backgroundColor:#ffffff;  
  opacity: .4;
  align-items: center;
  flex-direction: column;
`;