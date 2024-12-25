key = input()
q = int(input())


results = [] 

for _ in range(q):
    guess = input()

    chek = []
    i = 0
    
    
    if len(guess) != len(key):
        results.append('Invalid Length')
        continue       

    for k in guess:
        if k == key[i]:
            chek.append('G')
        elif k in key:
            chek.append('Y')
        else:
            chek.append('R')
        i += 1

    
    wordNOM =''.join(chek)
    results.append(wordNOM)




r = 0

for res in results:
    print(res)
    r += 1
    if res == 'G'*len(key):
        print('Game over\n' * (q - r))
        break
