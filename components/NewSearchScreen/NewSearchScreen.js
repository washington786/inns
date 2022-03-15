import {SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,TouchableOpacity,Dimensions
} from 'react-native'
import React, {useState, useEffect} from 'react';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const NewSearchScreen = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     setFilteredDataSource(responseJson);
        //     setMasterDataSource(responseJson);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        
      }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    
      const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
          </Text>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
      };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>

            <View style={{marginHorizontal: 15, 
                marginVertical:10, display:'flex',
                flexDirection: 'row',alignItems:'center'}}>

                    <TouchableOpacity
                        onPress={() =>navigation.navigate('bottomTabsScreen')}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#000"/>
                    </TouchableOpacity>

                    <View style={{
                    width: '95%', height: 44,backgroundColor: '#F9F9F9',borderRadius:5,shadowColor:'#000',
                    shadowOffset:{width:0,height:3},shadowOpacity:0.27,shadowRadius:4.65,elevation:6,
                    paddingHorizontal:10,display: 'flex',flexDirection: 'row',padding:10,
                    alignItems:'center', marginLeft:15}}>

                        <Icons
                            color='rgba(0, 0, 0, 0.25)'
                            name='search'
                            type='font-awesome'
                            size={20}
                        />
                        
                        <TextInput
                            style={{flex: 1, paddingHorizontal: 12}}
                            placeholder="Where would you like to go?"
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                        />

                    </View>

            </View>

            <View style={{height: height, width: width, marginHorizontal: 10,marginVertical: 10}}>
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>

        </View>
    </SafeAreaView>
  )
}

export default NewSearchScreen

  
  const Love = () => {
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />

        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
  });
  
