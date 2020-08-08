import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'

import styles from './styles'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(true)
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const handleVisibleInputsSearchForm = () => {
    setIsFilterVisible(!isFilterVisible)
  }

  const handleFilterSubmit = async () => {
    loadFavorites()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
    setIsFilterVisible(!isFilterVisible)
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader 
        title='Proffys disponíveis' 
        headerRight={(
          <BorderlessButton>
            <Feather name='filter' size={20} color='#fff' onPress={handleVisibleInputsSearchForm}/>
          </BorderlessButton>
        )}>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor='#c1bccc'
              style={styles.input}
              placeholder='Qual a matéria?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual horáio?'
                />
              </View>
            </View>

            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              teacher={teacher}
              key={teacher.id}
              favorited={favorites.includes(teacher.id)}
            />)
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList