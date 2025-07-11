package maxprofit

func maxProfit(prices []int) int {

	max := 0
	l := 0

	for r := 0; r < len(prices); r++ {
		dif := prices[r] - prices[l]
		if dif > max {
			max = dif
		}
		if prices[r] < prices[l] {
			l = r
		}

	}
	return max
}
