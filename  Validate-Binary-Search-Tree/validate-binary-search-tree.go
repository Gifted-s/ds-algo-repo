package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isValid(node *TreeNode, leftVal int, rightVal int) bool {
	if node == nil {
		return true
	}
	if leftVal < node.Val && node.Val < rightVal {
		return isValid(node.Left, leftVal, node.Val) && isValid(node.Right, node.Val, rightVal)
	} else {
		return false
	}
}
func isValidBST(root *TreeNode) bool {
	if root == nil {
		return true
	}

	// math.INF is not an intin golang so use big number instead
	return isValid(root, -9223372036854775807, 9223372036854775807)
}
