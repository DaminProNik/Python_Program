def sehbehBinary(sumMaghsom):
    return (sumMaghsom & (sumMaghsom-1)) == 0 and sumMaghsom != 0

def sumMaghsom(n):
    return sehbehBinary(sum(i for i in range(1, n) if n % i == 0))

num = int(input())
if sumMaghsom(num):
    print("1")
else:
    print("0")
