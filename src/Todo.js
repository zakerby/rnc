
import styles from './styles'
import TodoList from './TodoList';
import React, {Component} from 'react';
import { 
    Text,
    View,
    Modal,
    TouchableHighlight,
    TextInput,
 } from 'react-native';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
          toggleModal: false,
          newTaskName: '',
            items: [
                {
                  txt: 'Learn react native',
                  complete: false
                },
                {
                  txt: 'Make a to-do app',
                  complete: false
                },
                {
                  txt: 'Make the magic happen',
                  complete: false
                },
                {
                  txt: 'Drink beer',
                  complete: false
                }
            ]
        };

        this.completedTask = this.completedTask.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
      const {items, newTaskName: itemName} = this.state;
      items.push({
        txt: itemName,
        complete: false,
      });

      this.setState({
        items,
        toggleModal: false,
        newTaskName: '',
      });
    }

  toggleAddModal() {
      this.setState({
        toggleModal: true,
      });
  }

    completedTask(taskName) {
      const {items} = this.state;
      const taskIndex = items.findIndex(oneItem => oneItem.txt === taskName);
      items[taskIndex] = {
        ...items[taskIndex],
        complete: true,
      };

      this.setState({
        items,
      });
    }

    render() {
      const {items, toggleModal} = this.state;
        return (
            <View style={{flex:1}}>
                <TodoList
                    items={items}
                    onPress={this.completedTask}
                />
                <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.toggleAddModal}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
              <Modal
                animationType="slide"
                transparent
                visible={toggleModal}
                onRequestClose={() => {}}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <TextInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(newTaskName) => this.setState({newTaskName})}
                      value={this.state.text}
                    />
                    <TouchableHighlight
                      style={[styles.button, styles.newButton]}
                      underlayColor='#99d9f4'
                      onPress={this.addItem}
                    >
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </View>
        );
    }
}

export default Todo;
