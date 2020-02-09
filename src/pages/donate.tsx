import { createStyles, InputAdornment, Paper, TextField, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PayPalButton } from 'react-paypal-button'

import Layout from '../components/Layout'

import React, { ChangeEvent, useState } from 'react'

// TODO should we load this from getInitialProps?
const sandboxClientId = 'AVWpch2pw53wBuDrBDUFwNSo6DNPSNsCsqFmewslfAs01p4zQtcp0R4bklr1RA9x4umq_9JCRNl5PBwM'
// const productionClientId = 'AfpL1bWAhE-MLJLxcsc71FJ3iJOX3hT7z0sq8RCNIrM0xm_uJElpfLRB7Yzkpz2QtQF1SQoyikQAu7pZ'

interface AfterDonateResponse {
	amount: number
	token?: string
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(1),
		},
	})
)

export default function Donate(): JSX.Element {
	const classes = useStyles()
	const [amount, setAmount] = useState(5)
	const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setAmount(+event.target.value)
	}

	return (
		<Layout>
			<Paper className={classes.root}>
				{/* TODO make this form its own component */}
				<form>
					<TextField
						id="amount"
						label="Amount"
						helperText="Donate more than $5 USD to create an Impact Account"
						error={amount < 5}
						value={amount}
						onChange={handleAmountChange}
						required
						type="number"
						variant="outlined"
						InputProps={{
							startAdornment: <InputAdornment position="start">$</InputAdornment>,
						}}
						inputProps={{
							step: 0.5,
						}}
					/>
					<PayPalButton
						amount={amount}
						onPaymentSuccess={async (order): Promise<void> => {
							console.log('Transaction completed by ' + order.payer.email_address)

							const response = await fetch('http://api.localhost:8080/v1/paypal/afterpayment', {
								method: 'post',
								body: JSON.stringify({
									orderId: order.id,
								}),
								headers: {
									'Content-Type': 'application/json',
								},
							})
							if (response.ok) {
								const json = (await response.json()) as AfterDonateResponse
								alert(json) // TODO register form or show token
							} else {
								// TODO show error message
								alert('bad response: ' + response.status)
							}
						}}
						onPaymentError={(error): void => {
							// TODO show error message
							alert(error)
						}}
						paypalOptions={{
							intent: 'capture',
							clientId: sandboxClientId, //TODO ? sandboxClientId : productionClientId
						}}
					/>
				</form>
			</Paper>
		</Layout>
	)
}
