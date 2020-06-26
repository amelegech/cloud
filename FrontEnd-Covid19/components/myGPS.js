import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Polygon, Circle } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class myGPS extends React.Component {
  state = {
    coordinate: [
      { name: "Whole Foods", latitude: 41.012896, longitude: -91.964593, title: "We deliver you groceries for free" },
      { name: "Walmart", latitude: 41.008165, longitude: -91.993270, title: "You can get pizza for free" },
      { name: "Health", latitude: 41.007981, longitude: -91.969997, title: "we send you Doctor!" },
      { name: "Hy-vee", latitude: 41.005615, longitude: -91.978488, title: "$250 free cupone for you" },
      { name: "Whole Foods", latitude: 41.017896, longitude: -91.964093, title: "We deliver you groceries for free" },
    ]
  }
  myMsgHandler = () => {
    Alert.alert(
      "AMELE's Volunteer Service!",
      " stay safe!, We'll be there soon to Help you",
      [
        {
          text: 'No,Thanks!',
          style: 'Cancel'
        },
        {
          text: 'please Hurry Up!'

        }
      ]
    )

  }

  render() {
    //iterate my coordinate array and
    let myMark = null;
    myMark = this.state.coordinate.map(Mark => {

      return (<Marker
        key={Mark.name}
        coordinate={{ ...Mark }}
        title={Mark.name}

      >
        <Callout onPress={this.myMsgHandler}

          style={{ width: 100, height: 100 }}>
          {/* <Image  source={require('./image/help1.jpg')}/> */}
          <MaterialCommunityIcons name="help-rhombus" size={24} color="black" />
          <Text>{Mark.name && Mark.title}</Text>


        </Callout>

      </Marker>)

    })

    //console.log(this.state.coordinate);
    return (

      <MapView
        style={styles.myMap}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 41.006630,
          longitude: -91.965050,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        <Marker
          draggable
          coordinate={{ latitude: 41.009035, longitude: -91.964062 }}
        // title={'we are ready to healp you!'}
        >

          <Callout onPress={this.myMsgHandler}

            style={{ width: 100, height: 100 }}>
            {/* <Image source={require('./image/help1.jpg')} /> */}
            <MaterialCommunityIcons name="help-rhombus" size={24} color="black" />
            <Text>"The Unified field of Fairfield!"</Text>

          </Callout>


        </Marker>
        <MapView.Marker
          draggable
          coordinate={{

            latitude: 41.006630,
            longitude: -91.965050
          }}
          title="MIU"
          description="Masters in Software Development"
          pinColor="blue" >
          <View style={styles.round}>
            <View style={styles.myMarker} />
          </View>
        </MapView.Marker>

        {myMark}

      </MapView>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myMap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  round:{
        borderRadius:50/2,
        height:50,
        width:50,
        overflow:'hidden',
        backgroundColor:'rgba(0,122,255,0.1)',
        borderWidth:1,
        borderColor:'rgba(0,112,255,0.3)',
        alignItems:'center',
        justifyContent:'center'
      },
      myMarker:{
        height:20,
        width:20,
        borderWidth:3,
        borderColor:'white',
        borderRadius:20/2,
        overflow:'hidden',
        backgroundColor:'#007AFF' //#F5FCFF
      },
})

////////////////my regular map////////////////////
// import React from 'react';
// //import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView, { Marker } from 'react-native-maps'

// export default class myGPS extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>

//         <MapView style={styles.mapStyle} 
//         showsUserLocation
//         initialRegion={{
//            latitude: 41.006630,
//            longitude: -91.965050, 
//            latitudeDelta: 0.0922, 
//            longitudeDelta: 0.0421, }}

//         > 
//        <MapView.Marker
//         draggable 
//         coordinate={{

//           latitude: 41.006630 ,
//           longitude: -91.965050}} 
//         title="MIU" 
//         description="Masters in Software Development"
//          pinColor="blue" > 
//          <View style={styles.round}>
//            <View  style={styles.myMarker}/>
//          </View>
//          </MapView.Marker> 
//        </MapView> 

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   round:{
//     borderRadius:50/2,
//     height:50,
//     width:50,
//     overflow:'hidden',
//     backgroundColor:'rgba(0,122,255,0.1)',
//     borderWidth:1,
//     borderColor:'rgba(0,112,255,0.3)',
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   myMarker:{
//     height:20,
//     width:20,
//     borderWidth:3,
//     borderColor:'white',
//     borderRadius:20/2,
//     overflow:'hidden',
//     backgroundColor:'#007AFF' //#F5FCFF
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height/4,
//     left:0,
//     right:0,
//     top:0,
//     bottom:0,
//     position:'absolute'
//   },
// });


/////////////////////////////////////


// import React from 'react';
// import * as Location from 'expo-location'
// //import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import {Permissions } from 'expo-permissions';
// import{MapView} from 'react-native-maps'

// const locations = require('./location.json')


// export default class myGPS extends React.Component {
//   state = {
//     latitude: null,
//     longitude: null,
//     locations:locations
//   }

//   async componentDidMount() {
//     const { status } = await Permissions.getAsync(Permissions.LOCATION)
//     if (status === 'granted') {
//       const result = await Permissions.AskAsync(Permissions.LOCATION);

//     }
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => console.log('State:', this.state)),
//       (error) => console.log('Error', error)
//     )

//   }

//     //mymethod

//   render() {
//     const { latitude,longitude} = this.state
//     if (latitude) {
//       return (

//         <MapView
//         showsUserLocation
//           style={{ flex: 1 }}
//           initialRegion={{
//             nlatitude,
//             longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//         </MapView>

//       );

//     }
//     return (
//       <View style={{
//         flex: 1,
//         backgroundColor: '#F5FCFF',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//         {/* <Text>We Need Your Permission!</Text> */}
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   round:{
//     borderRadius:50/2,
//     height:50,
//     width:50,
//     overflow:'hidden',
//     backgroundColor:'rgba(0,122,255,0.1)',
//     borderWidth:1,
//     borderColor:'rgba(0,112,255,0.3)',
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   myMarker:{
//     height:20,
//     width:20,
//     borderWidth:3,
//     borderColor:'white',
//     borderRadius:20/2,
//     overflow:'hidden',
//     backgroundColor:'#007AFF' //#F5FCFF
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//     left:0,
//     right:0,
//     top:0,
//     bottom:0,
//     position:'absolute'
//   },
// });















///////////////////////////////////////////////////


{/* <MapView.Marker
        draggable 
        coordinate={{
          
          latitude: 41.006630 ,
          longitude: -91.965050}} 
        title="MIU" 
        description="Masters in Software Development"
         pinColor="blue" > 
         <View style={styles.round}>
           <View  style={styles.myMarker}/>
         </View>
         </MapView.Marker>  */}


