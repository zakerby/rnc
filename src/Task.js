import styles from './styles'
import React from 'react';
import {
    Text, View, TouchableHighlight
} from 'react-native';

class Task extends React.Component {
    constructor(){
        super();
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
    }

    handleCompleteTask() {
      const {item: {txt: itemName}, onPress} = this.props;
      onPress(itemName);
    }

    render() {
      const {item} = this.props;
      const {complete} = item;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleCompleteTask}>
                    <View style={styles.container}>
                        <Text
                            style={[styles.txt, complete && styles.completed]}>
                            {item.txt}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

export default Task;
