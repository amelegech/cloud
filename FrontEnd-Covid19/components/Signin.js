import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';



const Signin = ({ navigation: { navigate } }) => {
    const [newUser, setNewUser] = React.useState({
        userName: '',
        email: '',
        password: '',
        loading: false,
        error: false
    })


    
    const UserInfoSubmitHandler = () => {
        //console.log(newUser.userName)
       fetchUserPost()
        
        navigate('HOME') 
    }

    const { userName, email, password } = newUser;
    const fetchUserPost = async () => {
        console.log(newUser)
        const result = await axios.post('http://172.18.7.102:5000/signin',newUser, {
           // body: { userName, email, password },
            headers: {
                'Content-Type': 'application/json'
            }

        })
        console.log("axios result",result.data)
    }
    
    return (
        // <KeyboardAwareScrollView >
        <View style={styles.container}>
            <Text style={styles.Usertitle} >New User Registration  form</Text>

            <TextInput style={styles.searchInput}
                placeholder={'Enter userName please'}
                onChangeText={item => { setNewUser({ ...newUser, userName: item }) }}
                value={newUser.userName}
            />
            <TextInput style={styles.searchInput}
                placeholder={'Enter Password please'}
                onChangeText={item => { setNewUser({ ...newUser, password: item }) }}
                value={newUser.password}
            />

            <TextInput style={styles.searchInput}
                placeholder={'Your Email please'}
                onChangeText={item => { setNewUser({ ...newUser, email: item }) }}
                value={newUser.email}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={UserInfoSubmitHandler}
            //value={}
            >
                <Text style={styles.buttonText}>Submit</Text>

            </TouchableOpacity>
        </View>
        // </KeyboardAwareScrollView>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green', //'#48BBEC
        justifyContent: 'center',
        padding: 30,
    },
    Usertitle: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'yellow'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        margin: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});
export default Signin;