# TesteCarrinho_Compras
import React from 'react'
import {Text,View,StyleSheet,FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import Api from './src/api/Api'
import Cart from './Cart';


const App = () => {
  
  return(
    <View style={{flex: 1}}>
      <View style={Estilos.conteinerTexto}>
        <Text style={Estilos.textoTopo}>Meu Carrinho</Text>
      </View>
       <FlatList 
         data={Api}
         keyExtractor={(item) => item.id}
         renderItem={({item}) => {
           
          return(
            <TouchableOpacity onPress={() => {}}>
            <View style={Estilos.ConteinerImagem}>
          
              <Image source={{uri:item.imageUrl}} style={Estilos.Imagem}/>
               <View style={{flex:1 , marginTop: '5%', flexDirection: 'column', padding: 3}}>        
                <Text style={Estilos.textoImagem}>{item.name}</Text>    
                <Text style={Estilos.textoPrecoAntigo}>R$ 1,23 </Text>
                <Text style={Estilos.textoPreco}>R$ {item.price}</Text>  
               </View>    
              
            </View>
           </TouchableOpacity>
         )
        }}
       
       />
       <View style={Estilos.ConteinerResultado}>
        
        <View>
         <Text style={{fontSize: 15,color: 'black'}}>Total</Text>
        </View>

         <View style={{marginLeft: '70%'}}>
           <Text style={{fontSize: 15, color: 'black'}}>R$ </Text>
         </View>
         
       </View>
       <View style={Estilos.ConteinerBotao}>
          <TouchableOpacity onPress={() => { Alert.alert('Compra finalizada')}} style={Estilos.Botao}>
            
               <Text style={Estilos.textoBotao}>Finalizar Compra</Text>
            </TouchableOpacity>
         </View>   

    </View>
  )
}
 export default App;

 const Estilos = StyleSheet.create({
 
   conteinerTexto:{
      alignItems: 'center',
      marginTop: 10,
      paddingBottom: 5,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
   },
   textoTopo:{
     fontSize: 20,
     color: 'black',
     fontWeight: 'bold'
   },

   ConteinerImagem:{
     flexDirection: 'row'
   },
   Imagem:{
    margin: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 150, 
    height: 150,
    borderRadius: 2
   },
  ConteinerResultado: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    padding: 30
  },
  ConteinerBotao:{
     borderTopColor: 'grey',
     borderTopWidth: 1,
     alignItems: 'center' ,
     padding: 20

  },
  Botao:{
    backgroundColor: '#35A7FF',
    width: 330,
    height: 40,
    borderRadius: 4
  },
  textoBotao: {
      marginTop: 5,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
   
  },
  textoImagem: {
      fontSize: 13,
      color: 'black',
      fontWeight: 'bold'
  },
  textoPreco: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
}, 
  textoPrecoAntigo:{
    fontSize: 12,
    fontWeight: 'bold'
  }


 })
