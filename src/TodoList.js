import React from 'react';
import {
    ListView,
} from 'react-native';

import Task from './Task';

import styles from './styles';

class TodoList extends React.Component {
    componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        const {items, onPress} = this.props;
        const dataSource = this.dataSource.cloneWithRows(items);

        return (
            <ListView
                dataSource={dataSource}
                renderRow={(rowData, sectionID, rowID) =>
                    <Task 
                        item={rowData}
                        onPress={onPress}
                    />
                }
                style={styles.listView}
            />
        );
    }

}


export default TodoList;
