import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import firestore from '@react-native-firebase/firestore';
import Loading from '../navigation/Loading';

const ChooseOne = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [chosenItems, setChosenItems] = useState([]);
  const [pageItems, setPageItems] = useState([]);
  const [mainItem, setMainItem] = useState(0);
  const [leftItem, setLeftItem] = useState(1);
  const [rightItem, setRightItem] = useState(2);
  const [heads, setHeads] = useState([
    'base',
    'filling',
    'ads',
    'cream',
    'decoration',
  ]);
  const [flag, setFlag] = useState(false);
  const [firstPage, setFirstPage] = useState();
  const [backFlag, setBackFlag] = useState(false);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    const firestoreItems = firestore()
      .collection('CupCake')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setItems(oldItems => [...oldItems, doc.data()]);
          if (doc.data().page == page) {
            setPageItems(oldItems => [...oldItems, doc.data()]);
          }
        });
      });

    console.log(items);
  }, []);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(async () => {
    await sleep(2000);
    setFlag(true);
  }, [pageItems]);
  useEffect(async () => {
    setPageItems([]);
    items.forEach(item => {
      if (item.page == page) {
        setPageItems(oldItems => [...oldItems, item]);
      }
      setFlag(true);
    });
    if (page === 1) {
      setBackFlag(true);
      styles.backdisabled = {
        backgroundColor: '#c5c5c5',
      };
      styles.firstPage = {
        backgroundColor: '#000',
      };
      styles.firstPageText = {
        color: '#fff',
        fontSize: 20,
      };
      styles.secondPage = {
        color: '#fff',
      };
      styles.secondPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.thirdPage = {
        color: '#fff',
      };
      styles.thirdPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fourthPage = {
        color: '#fff',
      };
      styles.fourthPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fifthPage = {
        color: '#fff',
      };
      styles.fifthPageText = {
        fontSize: 20,
        color: '#000',
      };
    } else if (page === 2) {
      setBackFlag(false);
      styles.backdisabled = {};
      styles.firstPage = {
        backgroundColor: '#fff',
      };
      styles.firstPageText = {
        color: '#000',
        fontSize: 20,
      };
      styles.secondPage = {
        backgroundColor: '#000',
      };
      styles.secondPageText = {
        fontSize: 20,
        color: '#fff',
      };
      styles.thirdPage = {
        backgroundColor: '#fff',
      };
      styles.thirdPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fourthPage = {
        backgroundColor: '#fff',
      };
      styles.fourthPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fifthPage = {
        backgroundColor: '#fff',
      };
      styles.fifthPageText = {
        fontSize: 20,
        color: '#000',
      };
    } else if (page === 3) {
      styles.firstPage = {
        backgroundColor: '#fff',
      };
      styles.firstPageText = {
        color: '#000',
        fontSize: 20,
      };
      styles.secondPage = {
        backgroundColor: '#fff',
      };
      styles.secondPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.thirdPage = {
        backgroundColor: '#000',
      };
      styles.thirdPageText = {
        fontSize: 20,
        color: '#fff',
      };
      styles.fourthPage = {
        backgroundColor: '#fff',
      };
      styles.fourthPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fifthPage = {
        backgroundColor: '#fff',
      };
      styles.fifthPageText = {
        fontSize: 20,
        color: '#000',
      };
    } else if (page === 4) {
      styles.firstPage = {
        backgroundColor: '#fff',
      };
      styles.firstPageText = {
        color: '#000',
        fontSize: 20,
      };
      styles.secondPage = {
        backgroundColor: '#fff',
      };
      styles.secondPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.thirdPage = {
        backgroundColor: '#fff',
      };
      styles.thirdPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fourthPage = {
        backgroundColor: '#000',
      };
      styles.fourthPageText = {
        fontSize: 20,
        color: '#fff',
      };
      styles.fifthPage = {
        backgroundColor: '#fff',
      };
      styles.fifthPageText = {
        fontSize: 20,
        color: '#000',
      };
    } else if (page === 5) {
      styles.firstPage = {
        backgroundColor: '#fff',
      };
      styles.firstPageText = {
        color: '#000',
        fontSize: 20,
      };
      styles.secondPage = {
        backgroundColor: '#fff',
      };
      styles.secondPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.thirdPage = {
        backgroundColor: '#fff',
      };
      styles.thirdPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fourthPage = {
        backgroundColor: '#fff',
      };
      styles.fourthPageText = {
        fontSize: 20,
        color: '#000',
      };
      styles.fifthPage = {
        backgroundColor: '#000',
      };
      styles.fifthPageText = {
        fontSize: 20,
        color: '#fff',
      };
    }
  }, [page]);
  function onSwipeLeft(gestureState) {
    if (mainItem == pageItems.length - 1) {
      setMainItem(0);
    } else if (leftItem == pageItems.length - 1) {
      setMainItem(1);
      setLeftItem(0);
      setRightItem(pageItems.length - 1);
    } else if (rightItem == pageItems.length - 1) {
      setMainItem(2);
      setLeftItem(1);
      setRightItem(0);
    } else {
      setMainItem(mainItem + 1);
      setLeftItem(leftItem + 1);
      setRightItem(rightItem + 1);
    }
  }
  function onSwipeRight(gestureState) {
    if (mainItem == 0) {
      setMainItem(pageItems.length - 1);
      setLeftItem(pageItems.length - 2);
      setRightItem(pageItems.length - 3);
    } else if (rightItem == 0) {
      setMainItem(1);
      setLeftItem(0);
      setRightItem(pageItems.length - 1);
    } else if (leftItem == 0) {
      setMainItem(0);
      setLeftItem(pageItems.length - 1);
      setRightItem(pageItems.length - 2);
    } else {
      setMainItem(mainItem - 1);
      setLeftItem(leftItem - 1);
      setRightItem(rightItem - 1);
    }
  }
  return (
    <View style={styles.container}>
      {flag ? (
        <View style={styles.mainContainer}>
          {console.log(pageItems)}
          <Text style={styles.mainLabel}>Choose cupcake {heads[page - 1]}</Text>
          <View style={{height: '40%', width: '100%'}}>
            <GestureRecognizer
              onSwipeLeft={state => onSwipeLeft(state)}
              onSwipeRight={state => onSwipeRight(state)}
              config={config}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                margin: 0,
                padding: 0,
              }}>
              <Image
                style={styles.mainImage}
                source={{
                  uri: flag
                    ? pageItems[mainItem].URL
                    : 'https://i.pinimg.com/564x/bb/5b/7d/bb5b7d46dff6cfc2248326fd623f798b.jpg',
                }}
              />

              <Text style={{color: '#BDBDBD', fontSize: 28, marginTop: 5}}>
                {pageItems[mainItem].name}
              </Text>
            </GestureRecognizer>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={[styles.smallImg, {marginRight: 5}]}
              source={{
                uri: flag
                  ? pageItems[leftItem].URL
                  : 'https://i.pinimg.com/564x/bb/5b/7d/bb5b7d46dff6cfc2248326fd623f798b.jpg',
              }}
            />
            <Image
              style={[styles.smallImg, {marginLeft: 5}]}
              source={{
                uri: flag
                  ? pageItems[rightItem].URL
                  : 'https://i.pinimg.com/564x/bb/5b/7d/bb5b7d46dff6cfc2248326fd623f798b.jpg',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 9,
            }}>
            <TouchableOpacity
              disabled={backFlag}
              style={[styles.logbtn, {marginRight: 15}, styles.backdisabled]}
              onPress={() => {
                setPage(page - 1);
                let tempChosen = chosenItems;
                tempChosen.pop();
                setChosenItems(tempChosen);
                setMainItem(0);
              }}>
              <Text style={styles.textBtn}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.logbtn, {marginLeft: 15}]}
              onPress={() => {
                if (page == 5) {
                  navigation.navigate('ResultPage', {
                    chosenItems: chosenItems,
                    lastItem: pageItems[mainItem],
                    type: {
                      name: 'Cupcake',
                      URL:
                        'https://i.pinimg.com/564x/8b/b6/61/8bb6619ff7fe3a76fe2aa5144f9b7a22.jpg',
                    },
                  });
                } else {
                  setPage(page + 1);
                  setChosenItems(oldItems => [
                    ...oldItems,
                    pageItems[mainItem],
                  ]);
                  setMainItem(0);
                }
              }}>
              <Text style={styles.textBtn}>Next</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 23,
              justifyContent: 'space-around',
              width: '80%',
            }}>
            <View style={[styles.circle, styles.firstPage]}>
              <Text style={styles.firstPageText}>1</Text>
            </View>
            <View style={[styles.circle, styles.secondPage]}>
              <Text style={styles.secondPageText}>2</Text>
            </View>
            <View style={[styles.circle, styles.thirdPage]}>
              <Text style={styles.thirdPageText}>3</Text>
            </View>
            <View style={[styles.circle, styles.fourthPage]}>
              <Text style={styles.fourthPageText}>4</Text>
            </View>
            <View style={[styles.circle, styles.fifthPage]}>
              <Text style={styles.fifthPageText}>5</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6646ee" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',

    height: '95%',
    width: '100%',
  },
  mainLabel: {
    marginTop: '7%',
    marginBottom: '3%',
    fontSize: 28,
    fontWeight: '700',
    color: '#E0E0E0',
  },
  mainImage: {
    height: '90%',
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  smallImg: {
    height: 74,
    width: 74,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
    marginTop: 30,
  },
  logbtn: {
    backgroundColor: '#000',
    width: 130,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    padding: 10,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdisabled: {
    backgroundColor: '#c5c5c5',
  },
});

export default ChooseOne;
