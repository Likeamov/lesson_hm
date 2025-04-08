/**
 * 寻找最长回文子串
 * @param {string} s 输入字符串
 * @returns {string} 最长回文子串
 */
function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;
    const n = s.length;
    
    // 创建动态规划表
    const dp = Array(n).fill().map(() => Array(n).fill(false));
    
    // 单个字符都是回文
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    // 检查两个字符的情况
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }
    
    // 检查长度大于2的子串
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }
    
    return s.substring(start, start + maxLength);
}

// 测试代码
function testLongestPalindrome() {
    const testCases = [
        "babad",
        "cbbd",
        "a",
        "ac",
        "racecar",
        "abacdfgdcaba"
    ];
    
    testCases.forEach(s => {
        console.log(`输入: "${s}"`);
        console.log(`输出: "${longestPalindrome(s)}"`);
        console.log('---');
    });
}

// 运行测试
testLongestPalindrome(); 