import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {RecyclerListView, DataProvider, layoutProvider} from 'recyclerlistview';
import SearchBtn from '../components/SearchBtn';
import useSearchApi from '../hooks/useSearchApi';

// const RecycleList = () => {
//   const {data, isLoaded} = useSearchApi('apple', []);

//   let { width } = Dimensions.get('window');


//   const dataDataProvider = new DataProvider((r1, r2) => {
//     return r1 !== r2;
//   }).cloneWithRows(data);

//   const layoutsProvider = new layoutProvider(
//     () => 0,
//     (type, dim) => {
//       dim.width = width;
//       dim.height = 240;
//     },


//   return (
//     <>
//     <View>
//       <RecyclerListView
//         layoutProvider={layoutsProvider}
//         dataProvider={dataDataProvider}
//       />
//     </View>
//     </>
//   );
// };

// export default RecycleList;



export default class RecycleList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2
      }).cloneWithRows(props)
  };
  }





  render() {
    return (
      <div>
        
      </div>
    )
  }
}
