package groupanagrams

import (
	"strconv"
	"strings"
)

const englishAphabetSize = 26

func groupAnagrams(strs []string) [][]string {
	alphabets := "abcdefghijklmnopqrstuvwxyz"
	alphabetsPosMap := make(map[rune]int, englishAphabetSize)
	anagramMap := make(map[string][]string, len(strs))

	for idx, char := range alphabets {
		alphabetsPosMap[char] = idx
	}

	for _, str := range strs {
		h := generateStringHash(str, alphabetsPosMap)
		if _, ok := anagramMap[h]; ok {
			anagramMap[h] = append(anagramMap[h], str)
		} else {
			anagramMap[h] = []string{str}
		}

	}

	result := make([][]string, 0, len(anagramMap))
	for _, v := range anagramMap {
		result = append(result, v)
	}
	return result
}

func generateStringHash(word string, alphabetsPosMap map[rune]int) string {
	countSlice := make([]int, englishAphabetSize)
	for _, char := range word {
		countSlice[alphabetsPosMap[char]] += 1
	}

	positionStr := make([]string, englishAphabetSize)
	for i, _ := range countSlice {
		positionStr[i] = strconv.Itoa(countSlice[i])
	}
	return strings.Join(positionStr, ",")
}
