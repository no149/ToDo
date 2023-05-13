import { Text, TouchableOpacity, View } from 'react-native'
import style from '../styles/miniNote'
import contentType from '../types/contentType'
import NoteContentView from './noteContent'
import { NoteContent } from '../model/note'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'

export default ({
  title,
  content,
}: {
  title: string
  content: NoteContent<contentType>[]
}) => {
  const [fullSize, setFullSize] = useState(false)
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('list note touched')
        setFullSize(!fullSize)
      }}
    >
      <View style={style.listItem}>
        {fullSize && (
          <Button onPress={() => console.log('edit touched')} title="Edit" />
        )}
        <Text style={style.listItemHeader}>{title}</Text>
        <NoteContentView contents={content} height={fullSize ? 100 : 50} />
      </View>
    </TouchableOpacity>
  )
}
