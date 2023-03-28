<p align="center">
<img src="https://user-images.githubusercontent.com/102517204/221152474-f92be415-f414-4b45-8137-104a53bc5d2e.png" >
</p>

## Hangman


Hangman is a game where players try to solve the hidden word by guessing what letters it contains.
You win if you can get the answer with <8 mistakes.



## How it's made

**Components**

Aside from the header and footer, this app has 3 main components that are displayed alternatively:

1. Intro, which explains the game rules
2. Game, which contains:
   1. Stats (round, number of wins, streak)
   2. Illustration of hanged man
   3. Container for the letter guessed
   4. Onscreen keyboard
3. Result, which shows the summary of the previous round.

**Wordlist**

A wordlist can be easily obtained because it is popular in cybersecurity. I find one and narrow it down to 390 entries.
To protect the word list, it has been reordered randomly and encoded with Base64 encoding. 
A random word from the word list will be chosen, decoded, and then used as the answer.

**Hanged man illustration**

I used inline SVG for the illustration because it can be modified with CSS and DOM. Most SVG elements except the hanging pole are hidden
and will be shown one by one for each wrong guess.

## Mistakes Made and Lessons Learned 

**Comparing Array**

Despite the fact that both arrays contain the same value, determining the result with `guessedAnswer === answer` always returns `false`. It turns out they are treated as different arrays.

```
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); //false
console.log(a === a); //true
```

Solution: Normally, comparing arrays requires the programmer to create a function to compare each array element. I took the easier method of checking the occurrence of the underscore.

```
['A', 'N', 'S', 'W', 'E', 'R'] // no underscore->round end, player win
['A', 'N', '_', 'W', '_', 'R'] // underscore found-> round continue
```

**setState nature**

During development, I found that the setState hook wasn't immediately reflected.

```
console.log(answer)  // output: 'ALIVE'
setAnswer('BROOM')    
console.log(answer)  // expected output: 'BROOM', real output: 'ALIVE'
```

It turns out that this occurred due to the asynchronous nature of setState. This problem can be solved by using callbacks.

**Interface**

During development, I use the word "TEST" as a sample answer. This causes problems when longer words are chosen as answers, because it take more space in the game interface and could potentially break the layout. Luckily, it can be solved by adjusting padding & font-size for smaller screens. It taught me to be more mindful about this kind of issue in the future.
