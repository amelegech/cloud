import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'




const Home = ({ navigation: { navigate } }) => {
    const [userLog, setUserLog] = React.useState({
        email: '', 
        password: '',
        loading: false,
        error: false
    })



    const UserLoginHandler = () => { // login  POST {router auth..... /login}

        //fetch data
        fetchloginPost();



    }
    ///Home page logein work if password and email match perfectly

    const fetchloginPost = async () => {
        const { email, password } = userLog;

        try {
            const result = await axios.post('http://172.18.7.102:5000/login', { email, password })// localhost repleced by  ip address because of network, and the ip address might be changable {ipconfig}
            alert("welcom to my GPS!")
            navigate('MY_GPS')
        } catch (error) {
            setUserLog(prev => ({ ...prev, error: "Ooops..Invalid username or password" }))
        }




       
    }



    return (

        <View style={styles.container}>
            <Text style={styles.Usertitle} >User Login</Text>

            <TextInput style={styles.searchInput}
                placeholder={'Your Email must have .com ...'}
                onChangeText={user => setUserLog({ ...userLog, email: user })}
                value={userLog.email}
            />
            <TextInput style={styles.searchInput}
                placeholder={'Enter Password ...'}
                onChangeText={user => setUserLog({ ...userLog, password: user })}
                value={userLog.password}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={UserLoginHandler}
        
            >
            <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>
            {userLog.error && <Text style={styles.Usertitle}>{userLog.error}</Text>}
        </View>


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
        color: 'white',


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
export default Home;