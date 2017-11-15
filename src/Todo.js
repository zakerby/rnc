
import styles from './styles'
import TodoList from './TodoList';
import ToDoEdit from './ToDoEdit';
import React, {Component} from 'react';
import { 
    Text,
    View,
    ListView,
    TouchableHighlight,
 } from 'react-native';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {txt: 'Learn react native', complete: false},
                {txt: 'Make a to-do app', complete: true}
            ]
        };
        this.openItem = this.openItem.bind(this);
    }

    addItem(itemName) {

    }

    openItem(rowData, rowID) {
        this.props.navigator.push({
            title: rowData && rowData.txt || 'New Item',
            component: ToDoEdit,
            passProps: {item: rowData, id: rowID, update: this.updateItem}
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TodoList
                    items={this.state.items}
                    onPressItem={this.openItem}
                />
                <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.openItem}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Todo;