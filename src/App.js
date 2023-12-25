import React, { useState } from "react";
import "../src/App.css";
import CryptoJS from "crypto-js";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedData, setDecryptedData] = useState("");
  const [secretKey,setSecretKey]=useState("");
  const [secretKey1,setSecretKey1]=useState("");
  const [isEncrypted,setIsEncrypted]=useState(false)
  const [isDecrypted,setIsDecrypted]=useState(false)
  //const// secretPass="jhKzW1q54YuI";
   // Generate a 256-bit (32-byte) key
  //const randomKey=[...Array(16)].map(()=>"ABCDEFGHIJKLMNOPQRSTUVWXZ1234567890".charAt(Math.floor(Math.random()*35))).join("")
   //console.log(randomKey)
  const encrypted = () => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
    setEncryptedText(ciphertext);
    setIsEncrypted(true)
  };
  const decrypt=()=>{
    const decryptedText=CryptoJS.AES.decrypt(value2,secretKey1).toString(CryptoJS.enc.Utf8)
    setDecryptedData(decryptedText)
    console.log(secretKey)
    console.log(decryptedText)
    setIsDecrypted(true)
  }

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Text Here"
        className="textbox" />

        <input
        type="text"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
        placeholder="Enter Secret Key Here"
        className="textbox" />
      <button className="btn" onClick={encrypted}>
        Encrypt
      </button>
      {isEncrypted &&(
       <div className="encrypted-text">
        <p>Encrypted Text:</p>
        <pre className="encrypted-content">{encryptedText}</pre>
      </div>
    )}

      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder="Enter Text Here"
        className="textbox" />

        <input
        type="text"
        value={secretKey1}
        onChange={(e) => setSecretKey1(e.target.value)}
        placeholder="Enter Secret Key Here"
        className="textbox" />
      <button className="btn" onClick={decrypt}>
        decrypt
      </button>

      {isDecrypted &&(
       <div className="encrypted-text">
        <p>Decrypted Text:</p>
        <pre className="encrypted-content">{decryptedData}</pre>
      </div>
    )}

    
    </div>
  );
};

export default App;

//import React, { useState } from "react";
//import CryptoJS from "crypto-js";
//
//const App = () => {
//  const [text, setText] = useState("");
//  const [secretKey, setSecretKey] = useState("");
//  const [encryptedText, setEncryptedText] = useState("");
//  const [decryptedText, setDecryptedText] = useState("");
//
//  const handleEncryption = () => {
//    try {
//      const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
//      setEncryptedText(ciphertext);
//    } catch (error) {
//      console.error("Encryption error:", error);
//    }
//  };
//   console.log(secretKey)
//  const handleDecryption = () => {
//    try {
//      const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
//      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
//      setDecryptedText(decrypted);
//    } catch (error) {
//      console.error("Decryption error:", error);
//    }
//  };
//
//  return (
//    <div className="container">
//      <div>
//        <input
//          type="text"
//          value={text}
//          onChange={(e) => setText(e.target.value)}
//          placeholder="Enter Text Here"
//          className="textbox"
//        />
//        <input
//          type="text"
//          value={secretKey}
//          onChange={(e) => setSecretKey(e.target.value)}
//          placeholder="Enter Secret Key Here"
//          className="textbox"
//        />
//        <button className="btn" onClick={handleEncryption}>
//          Encrypt
//        </button>
//      </div>
//
//      {encryptedText && (
//        <div className="encrypted-text">
//          <p>Encrypted Text:</p>
//          <pre className="encrypted-content">{encryptedText}</pre>
//        </div>
//      )}
//
//      <div>
//        <input
//          type="text"
//          value={encryptedText}
//          placeholder="Encrypted Text"
//          className="textbox"
//        />
//        <input
//          type="text"
//          value={secretKey}
//          onChange={(e) => setSecretKey(e.target.value)}
//          placeholder="Enter Secret Key Here"
//          className="textbox"
//        />
//        <button className="btn" onClick={handleDecryption}>
//          Decrypt
//        </button>
//      </div>
//
//      {decryptedText && (
//        <div className="encrypted-text">
//          <p>Decrypted Text:</p>
//          <pre className="encrypted-content">{decryptedText}</pre>
 //       </div>
 //     )}
//    </div>
//  );
//};

//export default App;
