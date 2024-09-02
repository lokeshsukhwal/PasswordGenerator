import { useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let charSet = lowerCaseChars + upperCaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSymbols) charSet += symbolChars;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Password Generator</h2>

            <div>
                <label>Password Length: {length}</label>
                <input
                    type="range"
                    min="4"
                    max="20"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    Include Numbers
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    Include Symbols
                </label>
            </div>

            <button onClick={generatePassword}>Generate Password</button>

            {password && (
                <div style={{ marginTop: '20px' }}>
                    <p>{password}</p>
                    <button onClick={copyToClipboard}>Copy Password</button>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;
