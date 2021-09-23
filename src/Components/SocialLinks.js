import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default function SocialLinks() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 70,
        marginVertical: 40,
      }}>
      <TouchableOpacity>
        <Svg
          data-name="facebook (2)"
          xmlns="http://www.w3.org/2000/svg"
          width={32.851}
          height={32.851}
          viewBox="0 0 32.851 32.851">
          <Path
            data-name="Path 659"
            d="M28.744 0H4.106A4.11 4.11 0 000 4.106v24.638a4.11 4.11 0 004.106 4.106h24.638a4.11 4.11 0 004.106-4.106V4.106A4.11 4.11 0 0028.744 0z"
            fill="#1976d2"
          />
          <Path
            data-name="Path 660"
            d="M27.719 16.426h-5.133V12.32c0-1.133.92-1.027 2.053-1.027h2.053V6.16h-4.106a6.159 6.159 0 00-6.16 6.16v4.106h-4.107v5.134h4.106v11.292h6.16V21.56h3.08z"
            fill="#fafafa"
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={31.851}
          height={31.851}
          viewBox="0 0 32.851 32.851">
          <Path
            data-name="Path 661"
            d="M31.608 13.57h-13.4a1.071 1.071 0 00-1.071 1.071v4.281a1.071 1.071 0 001.071 1.068h7.546a10.073 10.073 0 01-4.336 5.081l3.218 5.57a16.106 16.106 0 008.213-14.085 10.858 10.858 0 00-.185-2.1 1.076 1.076 0 00-1.056-.886z"
            fill="#167ee6"
          />
          <Path
            data-name="Path 662"
            d="M16.425 26.423a10 10 0 01-8.648-5l-5.57 3.21a16.412 16.412 0 0022.43 6.02v-.008l-3.218-5.57a9.924 9.924 0 01-4.994 1.348z"
            fill="#12b347"
          />
          <Path
            data-name="Path 663"
            d="M24.638 30.651v-.008l-3.213-5.57a9.923 9.923 0 01-5 1.35v6.427a16.4 16.4 0 008.213-2.199z"
            fill="#0f993e"
          />
          <Path
            data-name="Path 664"
            d="M6.427 16.425a9.924 9.924 0 011.35-4.995l-5.57-3.21a16.35 16.35 0 000 16.41l5.57-3.21a9.924 9.924 0 01-1.35-4.995z"
            fill="#ffd500"
          />
          <Path
            data-name="Path 665"
            d="M16.425 6.427a9.952 9.952 0 016.348 2.279 1.067 1.067 0 001.436-.065l3.033-3.033a1.079 1.079 0 00-.062-1.579A16.389 16.389 0 002.208 8.22l5.57 3.21a10 10 0 018.647-5.003z"
            fill="#ff4b26"
          />
          <Path
            data-name="Path 666"
            d="M22.773 8.706a1.067 1.067 0 001.436-.065l3.033-3.033a1.079 1.079 0 00-.062-1.579A16.376 16.376 0 0016.425 0v6.427a9.952 9.952 0 016.348 2.279z"
            fill="#d93f21"
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={31.851}
          height={31.851}
          viewBox="0 0 32.851 32.851">
          <Path
            d="M29.879 0H2.972A2.972 2.972 0 000 2.972v26.907a2.972 2.972 0 002.972 2.972h26.907a2.972 2.972 0 002.972-2.972V2.972A2.972 2.972 0 0029.879 0zM10.165 28.366a.865.865 0 01-.865.865H5.619a.865.865 0 01-.865-.865V12.934a.865.865 0 01.865-.865H9.3a.865.865 0 01.865.865zM7.46 10.615a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm21.94 17.82a.8.8 0 01-.8.8h-3.95a.8.8 0 01-.8-.8V21.2c0-1.08.317-4.732-2.822-4.732-2.434 0-2.928 2.5-3.027 3.621v8.348a.8.8 0 01-.8.8H13.4a.8.8 0 01-.8-.8V12.865a.8.8 0 01.8-.8h3.82a.8.8 0 01.8.8v1.346c.9-1.355 2.244-2.4 5.1-2.4 6.325 0 6.289 5.909 6.289 9.156v7.468z"
            fill="#0077b7"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}