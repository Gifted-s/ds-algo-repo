package bracketcompilerwithstack
func isValid(s string) bool {
	stack := []string{}
	isleftBrackets := map[string]string{
		"(": ")",
		"[": "]",
		"{": "}",
	}

	for _, char := range s {
		close, exist := isleftBrackets[string(char)]
		if exist {
			stack = append(stack, close)
		} else if len(stack) == 0 || string(char) != stack[len(stack)-1] {
			return false
		} else {
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}
