import React, { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Login.css";
import Web3 from "web3";
function Login(){
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [account, setAccount] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        if(!isConnected){
            alert("Connect your Metamask account !")
        }
        e.preventDefault();
        const { fname, lname , phone} = e.target.elements;
        const data = {
            fname: fname.value,
            lname: lname.value,
            phone: phone.value,
            metamask_id: account,
        };
        setFormData(data);
        // navigate('/');
    };
    
    async function connectToMetaMask() {
        // Code to connect to MetaMask...
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this dApp!');
            return;
        }
        // Get the first few characters of the connected address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const address = accounts[0];
        const shortAddress = address.slice(0, 4) + "..." + address.slice(-2);
      
        // Update the button text with the short address
        document.getElementById("connect-button").textContent = shortAddress;
      
        // Set the isConnected state to true
        setIsConnected(true);
      }      
      useEffect(()=>{
        console.log(formData);
      },[formData]);
    useEffect(() => {
        // Check if Web3 is injected into the page
        if (typeof window.ethereum !== 'undefined') {
          console.log('Web3 is injected');
    
          // Create a new Web3 instance
          const web3 = new Web3(window.ethereum);
    
          // Add an event listener to the connect button
          const connectButton = document.getElementById('connect-button');
          connectButton.addEventListener('click', () => {
            // Request account access from the user
            window.ethereum.request({ method: 'eth_requestAccounts' })
              .then((accounts) => {
                console.log('Connected to Metamask');
                setIsConnected(true);
                setAccount(accounts[0]);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        } else {
          console.log('Web3 is not injected');
        }
      }, []); // Empty array as second argument makes sure useEffect only runs once after mounting
    useEffect(() => {
        console.log(fname);
      }, [fname]);
      useEffect(() => {
      }, [lname]);
    return (
        <div className="login-pg">
            <h1 className="fh1">Signup / </h1>
            <h1>Login</h1>
            <div className="login-blk">
                <form className="log-box" onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First Name : </label>
                    <input 
                    id="fname" 
                    name="fname" 
                    type="text"
                    placeholder="Enter first name" 
                    required
                    />  
                    <br />
                    <label htmlFor="last-name">Last Name : </label>
                    <input 
                    id="lname" 
                    name="lname" 
                    type="text"
                    placeholder="Enter last name" 
                    required
                    />  
                    <br />
                    <label htmlFor="phone-number">Phone Number : </label>
                    <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                    /> 
                    <br></br>
                    <button id = "connect-button" className="connect-button" onClick={connectToMetaMask}>MetaMask</button>
                    <div className="log-sub">
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

