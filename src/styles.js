import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
    taskCheckbox: {
      backgroundColor: 'transparent',
      borderWidth: 3,
      borderColor: 'blue',
      width: 10,
      height: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },
    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },
    todo: {
        marginTop: 100,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },
    completed: {
        color: '#cccccc'
    },
    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      height: 350,
      width: 300,
      backgroundColor: 'white',
    },
});

export default styles;

