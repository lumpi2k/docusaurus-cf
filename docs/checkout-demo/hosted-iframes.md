Ensure Compliance With PCI DSS SAQ A With Our Hosted-iFrame Mode
----------------------------------------------------------------

With the PAYONE hosted-iFrame Mode you have the flexibility with design of integration and an easy PCI DSS certification with level SAQ A.

**The basic requirements to be eligible for SAQ A are:**

*   Your company accepts only card-not-present (e-commerce or mail/telephone-order) transactions
*   All payment acceptance and processing are entirely outsourced to PCI DSS validated third-party service providers
*   Your company has no direct control of the manner in which cardholder data is captured, processed, transmitted, or stored
*   Your company does not electronically store, process, or transmit any cardholder data on your systems or premises, but relies entirely on a third party(s) to handle all these functions
*   Your company has confirmed that all third party(s) handling acceptance, storage, processing, and/or transmission of cardholder data are PCI DSS compliant
*   Your company retains only paper reports or receipts with cardholder data, and these documents are not received electronically.

and

*   **The entirety of all payment pages delivered to the consumer’s browser originates directly from a third-party PCI DSS validated service provider(s).**


Solution:

*   With PAYONE hosted-iFrame mode you will be compliant with all these requirements as the input fields for sensitive credit card data are designed as iframes and are provided by the PCI DSS certified PAYONE platform.

### Usage

Include the following JavaScript in your HTML page containing the form:

**JavaScript URL:** [https://secure.pay1.de/client-api/js/v1/payone\_hosted\_min.js](https://secure.pay1.de/client-api/js/v1/payone_hosted_min.js)

`<script type="text/javascript" src="[https://secure.pay1.de/client-api/js/v1/payone_hosted_min.js](https://secure.pay1.de/client-api/js/v1/payone_hosted_min.js)"></script>`

We provide an un-minified and human readable version of the file at [https://secure.pay1.de/client-api/js/v1/payone\_hosted.js](https://secure.pay1.de/client-api/js/v1/payone_hosted.js)

Please find some samples here:

#### Remarks

*   This JavaScript includes support of classic Client-API features described in chapter "AJAX mode" and "Redirect mode" (see following chapters) to support bank based payments and the PAYONE hosted iFrame mode.
*   To use the features of the classic Client-API with the new JavaScript you simply have to change "new PayoneRequest(…)" to "new Payone.ClientApi.Request(…)".

#### Known issues

*   There is a known issue with an old version (1.6 or before) of framework "[prototype](http://prototypejs.org/)" – please ensure to use the current version (at least 1.7).

### Brief description

The merchant has to implement:

*   A selector for cardtype

Configure your credit card acceptance here with the desired credit card types.

The selected cardtype has to be passed to the public method "setCardType".

You may also specify in config.cardtype available cardtypes for selection in a PAYONE iFrame.

*   Place a label for each credit card input field and a div-container for the input iframes

*   Optional: place a div-container to display error messages returned from the creditcardcheck 

*   Define an object to configure the design of the iFrames (see example: config = )
    *   Optional: Attribute "cardtype" can be configured with allowed cardtypes that are displayed in a PAYONE iFrame.  
        \-> Then the cardtype selector in your shop has to be removed.
    *   The attributes "cardpan", "cardcvc2", "cardexpiremonth", "cardexpireyear" are fixed.
    *   The value for attribute "selector" refers to the name of your div-container where the PAYONE iFrame should be rendered.
    *   You may specify for each field the type of input (text, password, tel and select (month/year only) using the attribute "type" and a CSS-style using the attribute "style".
    *   The value for attribute "error" refers to the name of your div-container where error-messages should be displayed.
    *   Pass your currently selected language to the config-object
    *   Coming Feature, May 2019: Use "styleFocus" and "inputFocus"/"selectFocus" to set/overwrite a new style when an elements gets focused.

*   New Feature: Decide whether you would like to use the feature of automatic cardtype detection. To use this feature simply add a block "autoCardtypeDetection" to the config-section. If enabled the user simply has to enter the PAN and the cardtype is detected automatically (for most major brands). By using a callback-function you may even get the result of the automatic detection, e.g. in order to change your creditcard brand logos.

*   Coming Feature, May 2019: Get an information within your application via callback-function when loading of application is finished. See "events / rendered" in example 3.1.5.5

  

Once all fields are set you will have to start the public function "iframes.creditCardCheck" which will initiate a creditcardcheck-request. This request will check the entered creditcard details and return a response-object which contains either:

```
response.status = "VALID"
response.pseudocardpan containing the unique pseudocardnumber (Pseudo-PAN)
response.truncatedcardpan containing the masked creditcard number (masked PAN)
response.cardtype containing the selected cardtype
response. cardexpiredate containing the entered expiredate (YYMM)
```

or

```
response.status = "INVALID"
response.errorcode -> please refer to the [section "error messages"](/display/PLATFORM/Error+messages)
response.errormessage in the specified language
```
