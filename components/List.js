import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const dataUrl = "http://media.mw.metropolia.fi/wbma/media/";

const List = (props) => {
const [media, setMedia] = useContext(MediaContext);

  const getMedia = () => {

    mediaArray=[];

    fetch(dataUrl)
    .then((response) => {
      return response.json();
    })

    .then((result) => {

      result.forEach(element => {

        let id_element = element.file_id;


        fetch(dataUrl+id_element)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
           mediaArray.push(result);
           setMedia(mediaArray);
        });

      });

    });
};

  useEffect(() => getMedia(), []);

  return(
    <FlatList

      data={media}

      renderItem={({item}) => <ListItem navigation={props.navigation} singleMedia={item} />}

      keyExtractor = {(item, index)=> index.toString()}

      />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
 };

export default List;
