package main

type Trie struct {
	children  []*Trie
	endOfWord bool
	char      string
}

func Constructor() Trie {
	return Trie{
		char:      "",
		children:  []*Trie{},
		endOfWord: false,
	}
}

func (this *Trie) Insert(word string) {
	root := this

	for _, char := range word {
		// if tree does not have any children then insert first char to new node
		if len(root.children) == 0 {
			root.children = append(root.children, &Trie{
				char:      string(char),
				children:  []*Trie{},
				endOfWord: false,
			})
		}

		for _, child := range root.children {
			if child.char == string(char) {
				root = child
			} else {
				root.children = append(root.children, &Trie{
					char:      string(char),
					children:  []*Trie{},
					endOfWord: false,
				})
			}
			break
		}
	}
	root.endOfWord = true
}

func (this *Trie) Search(word string) bool {
	root := this
	notFound := false

	for _, char := range word {
		if notFound {
			return false
		}
		if len(root.children) == 0 {
			return false
		}
		for _, child := range root.children {
			if string(child.char) == string(char) {
				root = child
			} else {
				notFound = true
			}
			break
		}
	}
	return !notFound && root.endOfWord
}

func (this *Trie) StartsWith(prefix string) bool {

	root := this
	notFound := false
	for _, char := range prefix {
		if notFound {
			return false
		}
		if len(root.children) == 0 {
			return false
		}
		for _, child := range root.children {
			if child.char == string(char) {
				root = child
			} else {
				notFound = true
			}
			break
		}
	}
	return true
}
