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

## Example Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Request" label="Request" default>

```
amount=2500
api_version=3.11
capturemode=completed
currency=EUR
encoding=UTF-8
invoiceappendix=test message
narrative_text=narrative
request=capture
sequencenumber=-1
settleaccount=auto
transaction_param=do_what_you_want-only-used_for_PMI_Exports
txid=123456789
```

</TabItem>
<TabItem value="Response" label="Response">

```
status=APPROVED
txid=123456789
settleaccount=yes
```

</TabItem>
</Tabs>
