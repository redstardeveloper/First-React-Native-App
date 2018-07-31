import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="An Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.inputButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%'
  },
  inputButton: {
    width: '30%'
  }
})