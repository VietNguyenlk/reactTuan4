import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,LinearGradient, TouchableOpacity} from 'react-native';


export default function App() {


    // Xử lý logic đăng nhập với mật khẩu ở đây
  const [name,setname] = useState ('');
  const [pass,setpass] = useState ('');

  const handleNameChange = (t) =>{
    setname(t)
  }

  const handlePasswordChange =(t) =>{
    setpass(t)
  }
  
  const handleSubmit = () => {
  
    console.log('your name, your pass : ',name,pass)
    alert([name,pass])
  };


  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* // login */}
      <View style={styles.header}>
            <Text style = {styles.login} > LOGIN </Text>

      </View>
        {/* phần input */}
      <View style={styles.center}>
          
          <TextInput style= {styles.input} placeholder="Name" 
                        // autoFocus = 'true'
                        //onChangeText={(text) => console.log(text)}
                        onChangeText={handleNameChange} 
                       
                        />  
                        {/* sk co hay k cung dc */}
          {/* password */}
          <TextInput  style= {styles.input} placeholder="Password" secureTextEntry = 'true'
                        // sau khi thay đổi dữ liệu là xuất dữ liệu ra luôn
                          // onChangeText={(t) => console.log(t)}
                         //----
                         onChangeText={handlePasswordChange} 
                          />  
      </View>

    {/* nút login */}

    <TouchableOpacity style={styles.btn}  onPress={handleSubmit}> 
    <View  >
 
            <Text style ={{color:'white',textAlign:'center',marginTop:'10px',fontSize:'24px'}}>LOGIN</Text>
 
    </View>

    </TouchableOpacity>
 {/* // forgot pass */}

 <TouchableOpacity style ={styles.footer} >
 <View >
      <Text style={{marginTop:'20px',fontSize:'20px',fontWeight:'bold'}}>Forgot your password?  </Text>
    </View>
    

 </TouchableOpacity>
    



     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00',
    alignItems: 'center', // ngang
    justifyContent: 'center', // doc
  },

  // header
  header:{
    flex: 1,
    // backgroundColor : "red",
    // colors={['#4c669f', '#3b5998', '#192f6a']},
    width : '100%',
    justifyContent: 'center',
   
   
  },

  // center

  center :{
    flex : 1,
    // backgroundColor : "green",
    width : "100%",
    // flexDirection :'row',
  
  },
  // footer, button login 
  btn:{
    
    width :'90%',
    height : '50px',
    backgroundColor :'black',
    
   
  },

    
  footer:{
    //flex :1,
    width :"60%",
    // backgroundColor : 'red',
    alignItems :'center',
    height:'50px',
    marginTop:'10px',
    marginBottom :'150px',
    
   
   
  },
  

  // login
  login:{
    fontSize : 40,
    marginLeft : -10,
    fontWeight :'bold',

    
  },

  // input
  input :{
    height :'50px',
    width : "350px",
    // alignItems : 'center',
    // justifyContent :'center',
    marginTop :'20px',
    marginLeft:'20px',
    // marginBottom :'30px',
    fontSize :'24px',
    textAlign :'left',
    borderWidth: 1,
    borderStyle : 'solid',
    borderColor :'white',
    backgroundColor : '#C4C4C4',
   
  },
  // buttonlogin:{
  //   width: 200, // Độ rộng mong muốn
  //   height: 50, // Chiều cao mong muốn
  //   fontSize: 20, // Kích thước chữ trong button
  // }


  

  

});





  


  



