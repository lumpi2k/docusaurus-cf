# Capture

## Introduction

The request "capture" includes the booking that was previously set up using
the "preauthorization" request. Depending on the type of payment,
specific functions are carried out.

| Payment Method       | Action                                            |
| -------------------- | ------------------------------------------------- |
| Credit Card          | The card is now charged using the reserved amount |
| Direct Debit         | Debit is carried out immediately                  |
| Online Bank Transfer | No additional financial action                    |
| Wallet               | Customer's e-wallet account is now being charged  |
| Prepayment           | No additional financial action                    |
| Invoice              | No additional financial action                    |
| Cash on Delivery     | No additional financial action                    |

## Parameter Reference

| Parameter      | Required | Format             | Comments                                                                                                                                                                                               |
| -------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| txid           | +        | `numeric(9..12)` | The txid specifies the payment process within the PAYONE platform                                                                                                                                      |
| sequencenumber | o        | `numeric(1..3)`  | Sequence number for this transaction within the payment process (1..n), e.g. PreAuthorization: 0, 1. Capture: 1, 2. Capture: 2<br />Required for multi partial capture (starting with the 2nd capture) |
|                |          |                    |                                                                                                                                                                                                        |
|                |          |                    |                                                                                                                                                                                                        |
|                |          |                    |                                                                                                                                                                                                        |
