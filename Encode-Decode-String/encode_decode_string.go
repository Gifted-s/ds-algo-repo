package main

import (
	"fmt"
	"strconv"
)

func DecodeString(s string)[]string{

	result := []string{}
	i:=0;
	for i< len(s){
		j:=i;
		for string(s[j]) != "#"{
			j+=1
			length, _ := strconv.Atoi(s[i:j])
            result = append(result, s[j+1:j+1+length])
			i=j+1+length
		}
	}
	return result
}

func main(){
 input := "7#adewumi4#code4#love3#you"
 fmt.Println(DecodeString(input))
}