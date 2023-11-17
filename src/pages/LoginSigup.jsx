import React from 'react';
import styles from './css/LoginSigup.module.css';
export const LoginSigup = () => {
	return (
		<div className={styles.loginsiup}>
			<div className={styles.container}>
				<h1>Sing Up</h1>
				<div className={styles.fields}>
					<input type="text" placeholder="Your Name" />
					<input type="email" placeholder="Email Address" />
					<input type="password" placeholder="Password" />
				</div>
				<button>Continue</button>
				<p className={styles.login}>
					Already have an account? <span>Login here</span>
				</p>
				<div className={styles.agree}>
					<input type="checkbox" name="" id="" />
					<p>By continuing, i aggre to the terms of use & privacy polis.</p>
				</div>
			</div>
		</div>
	);
};
