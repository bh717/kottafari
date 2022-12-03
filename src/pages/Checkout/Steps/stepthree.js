import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import postCard from '../../../assets/images/checkout/step3/Postnord logo.png'
import postCard1 from '../../../assets/images/checkout/step3/Postnord logo1.png'
import postCard2 from '../../../assets/images/checkout/step3/Postnord logo2.png'
import postCard3 from '../../../assets/images/checkout/step3/Postnord logo3.png'
import { useState } from 'react';
import axios from "axios";
import { Buffer } from 'buffer';


function StepThree({ checkstep, setCheckStep }) {
    const [selectValue, setSelectValue] = useState('option1');

    function onValueChange(e) {
        setSelectValue(e.target.value);
    }

    const isButtonSelected = (value) => {
        if (selectValue === value) {
            return true;
        }
    };

    async function createOrder() {

        const client = "PK67525_a34315b50c8b";
        const secret = "goXEmbefbtNPa9i4";

        const auth =
            "Basic " + Buffer.from(client + ":" + secret).toString("base64");

        console.log("authorization:", auth);

        // const orderInfo = [
        //     {
        //         type: "physical",
        //         reference: 498,
        //         name: "name",
        //         quantity: 12,
        //         quantity_unit: "pcs",
        //         unit_price: 34324 * 100,
        //         tax_rate: 2500,
        //         total_amount: 23 * 100 * 30,
        //         total_discount_amount: 0,
        //         total_tax_amount: 0,
        //     }
        // ]

        // const payload = {
        //     "order_id": "f3392f8b-6116-4073-ab96-e330819e2c07",
        //     "name": "Women's Fashion",
        //     "purchase_country": "US",
        //     "purchase_currency": "USD",
        //     "locale": "en-US",
        //     "status": "CHECKOUT_INCOMPLETE",
        //     "billing_address": {
        //         "given_name": "John",
        //         "family_name": "Doe",
        //         "organization_name": "string",
        //         "email": "john@doe.com",
        //         "title": "Mr",
        //         "street_address": "Lombard St 10",
        //         "street_address2": "Apt 214",
        //         "street_name": "Lombard St",
        //         "street_number": "10",
        //         "house_extension": "B",
        //         "postal_code": "90210",
        //         "city": "Beverly Hills",
        //         "region": "CA",
        //         "phone": "333444555",
        //         "country": "US",
        //         "care_of": "C/O",
        //         "reference": "string",
        //         "attention": "string"
        //     },
        //     "shipping_address": {
        //         "given_name": "John",
        //         "family_name": "Doe",
        //         "organization_name": "string",
        //         "email": "john@doe.com",
        //         "title": "Mr",
        //         "street_address": "Lombard St 10",
        //         "street_address2": "Apt 214",
        //         "street_name": "Lombard St",
        //         "street_number": "10",
        //         "house_extension": "B",
        //         "postal_code": "90210",
        //         "city": "Beverly Hills",
        //         "region": "CA",
        //         "phone": "333444555",
        //         "country": "US",
        //         "care_of": "C/O",
        //         "reference": "string",
        //         "attention": "string"
        //     },
        //     "order_amount": 50000,
        //     "order_tax_amount": 4545,
        //     "order_lines": [
        //         {
        //             "type": "physical",
        //             "reference": "19-402-USA",
        //             "name": "Red T-Shirt",
        //             "quantity": 5,
        //             "subscription": {
        //                 "name": "string",
        //                 "interval": "DAY",
        //                 "interval_count": 0
        //             },
        //             "quantity_unit": "pcs",
        //             "unit_price": 10000,
        //             "tax_rate": 1000,
        //             "total_amount": 50000,
        //             "total_discount_amount": 0,
        //             "total_tax_amount": 4545,
        //             "merchant_data": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
        //             "product_url": "https://www.example.com/products/f2a8d7e34",
        //             "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg",
        //             "product_identifiers": {
        //                 "brand": "Intel",
        //                 "color": "Blue",
        //                 "category_path": "Electronics Store > Computers & Tablets > Desktops",
        //                 "global_trade_item_number": "735858293167",
        //                 "manufacturer_part_number": "BOXNUC5CPYH",
        //                 "size": "Medium"
        //             },
        //             "shipping_attributes": {
        //                 "weight": 1000,
        //                 "dimensions": {
        //                     "height": 100,
        //                     "width": 100,
        //                     "length": 100
        //                 },
        //                 "tags": [
        //                     "string"
        //                 ]
        //             }
        //         }
        //     ],
        //     "customer": {
        //         "type": "person",
        //         "gender": "male",
        //         "date_of_birth": "1995-10-20",
        //         "organization_registration_id": "556737-0431",
        //         "vat_id": "string"
        //     },
        //     "merchant_urls": {
        //         "terms": "https://www.example.com/terms.html",
        //         "checkout": "https://www.example.com/checkout.html",
        //         "confirmation": "https://www.example.com/confirmation.html",
        //         "push": "https://www.example.com/api/push",
        //         "validation": "https://www.example.com/api/validation",
        //         "notification": "https://www.example.com/api/pending",
        //         "cancellation_terms": "https://www.example.com/terms/cancellation.html",
        //         "shipping_option_update": "https://www.example.com/api/shipment",
        //         "address_update": "https://www.example.com/api/address",
        //         "country_change": "https://www.example.com/api/country"
        //     },
        //     "html_snippet": "<div id='klarna-checkout-container'><script>alert('Initializing Klarna Checkout');</script></div>",
        //     "merchant_reference1": "45aa52f387871e3a210645d4",
        //     "merchant_reference2": "45aa52f387871e3a210645d4",
        //     "started_at": "2022-11-29T09:31:35.585Z",
        //     "completed_at": "2022-11-29T09:31:35.585Z",
        //     "last_modified_at": "2022-11-29T09:31:35.585Z",
        //     "options": {
        //         "require_validate_callback_success": true,
        //         "acquiring_channel": "string",
        //         "vat_removed": true,
        //         "allow_separate_shipping_address": true,
        //         "color_button": "#FF9900",
        //         "color_button_text": "#FF9900",
        //         "color_checkbox": "#FF9900",
        //         "color_checkbox_checkmark": "#FF9900",
        //         "color_header": "#FF9900",
        //         "color_link": "#FF9900",
        //         "date_of_birth_mandatory": true,
        //         "shipping_details": "Delivered within 1-3 working days",
        //         "title_mandatory": true,
        //         "additional_checkbox": {
        //             "text": "Please add me to the newsletter list, read more here link",
        //             "checked": true,
        //             "required": true
        //         },
        //         "national_identification_number_mandatory": true,
        //         "additional_merchant_terms": "string",
        //         "phone_mandatory": true,
        //         "radius_border": "5",
        //         "allowed_customer_types": [
        //             "string"
        //         ],
        //         "show_subtotal_detail": true,
        //         "additional_checkboxes": [
        //             {
        //                 "text": "Please add me to the newsletter list, read more here link",
        //                 "checked": true,
        //                 "required": true,
        //                 "id": "newsletter_opt_in"
        //             }
        //         ],
        //         "verify_national_identification_number": true,
        //         "auto_capture": true,
        //         "enable_discount_module": true,
        //         "show_vat_registration_number_field": true
        //     },
        //     "attachment": {
        //         "body": "{\"hotel_reservation_details\": [{\"pnr\": \"VH67899\",\"hotel_intinerary\": [{\"hotel_name\": \"Hotel ltd.\",\"address\": {\"street_address\": \"Storgatan 3\",\"postal_code\": \"113 35\",\"city\": \"Stockholm\",\"country\": \"Sweden\"},\"start_time\": \"2019-01-31T15:00:00Z\",\"end_time\": \"2019-01-31T15:30:00Z\",\"number_of_rooms\": 2,\"ticket_delivery_method\": \"email\",\"ticket_delivery_recipient\": \"jonas.larlsson@klarna.com\",\"hotel_price\": 23050,\"class\": \"Business\",\"passenger_id\": [1]}],\"passengers\": [{\"id\": 1,\"title\": \"mr\",\"first_name\": \"Adam\",\"last_name\": \"Adamson\"}],\"insurance\": [{\"insurance_company\": \"Insurance Company X\",\"insurance_type\": \"travel\",\"insurance_price\": 0}],\"affiliate_name\": \"TradeMaxi AB\"}],\"air_reservation_details\": [{\"pnr\": \"VH67899\",\"intinerary\": [{\"departure\": \"ARN\",\"departure_city\": \"Stockholm\",\"arrival\": \"NCE\",\"arrival_city\": \"Nice\",\"carrier\": \"SK\",\"segment_price\": 34000,\"departure_date\": \"2019-01-30T15:00:00Z\",\"ticket_delivery_method\": \"email\",\"ticket_delivery_recipient\": \"jonas.larlsson@klarna.com\",\"passenger_id\": [1]}],\"passengers\": [{\"id\": 1,\"title\": \"mr\",\"first_name\": \"Adam\",\"last_name\": \"Adamson\"}],\"insurance\": [{\"insurance_company\": \"Insurance Company X\",\"insurance_type\": \"travel\",\"insurance_price\": 0}],\"affiliate_name\": \"TradeMaxi AB\"}],\"customer_account_info\": [{\"unique_account_identifier\": \"12345\",\"account_registration_date\": \"2016-01-24T15:00:00Z\",\"account_last_modified\": \"2017-01-24T15:00:00Z\"}],\"payment_history_full\": [{\"payment_option\": \"card\",\"number_paid_purchases\": 2,\"total_amount_paid_purchases\": 1234,\"date_of_last_paid_purchase\": \"2018-01-24T15:00:00Z\",\"date_of_first_paid_purchase\": \"2018-01-24T15:00:00Z\"}]}",
        //         "content_type": "application/vnd.klarna.internal.emd-v2+json"
        //     },
        //     "external_payment_methods": [
        //         {
        //             "name": "PayhereUs",
        //             "fee": 0,
        //             "description": "an American company operating a worldwide online payments system",
        //             "countries": [
        //                 "string"
        //             ],
        //             "label": "continue",
        //             "redirect_url": "https://www.example.com/us/start",
        //             "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg"
        //         }
        //     ],
        //     "external_checkouts": [
        //         {
        //             "name": "PayhereUs",
        //             "fee": 0,
        //             "description": "an American company operating a worldwide online payments system",
        //             "countries": [
        //                 "string"
        //             ],
        //             "label": "continue",
        //             "redirect_url": "https://www.example.com/us/start",
        //             "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg"
        //         }
        //     ],
        //     "shipping_countries": [
        //         "string"
        //     ],
        //     "shipping_options": [
        //         {
        //             "id": "express_priority",
        //             "name": "EXPRESS 1-2 Days",
        //             "description": "Delivery by 4:30 pm",
        //             "promo": "Christmas Promotion",
        //             "price": 0,
        //             "preselected": true,
        //             "tax_amount": 0,
        //             "tax_rate": 0,
        //             "shipping_method": "PickUpStore",
        //             "delivery_details": {
        //                 "carrier": "string",
        //                 "class": "string",
        //                 "product": {
        //                     "name": "string",
        //                     "identifier": "string"
        //                 },
        //                 "timeslot": {
        //                     "id": "string",
        //                     "start": "string",
        //                     "end": "string"
        //                 },
        //                 "pickup_location": {
        //                     "id": "string",
        //                     "name": "string",
        //                     "address": {
        //                         "given_name": "John",
        //                         "family_name": "Doe",
        //                         "organization_name": "string",
        //                         "email": "john@doe.com",
        //                         "title": "Mr",
        //                         "street_address": "Lombard St 10",
        //                         "street_address2": "Apt 214",
        //                         "street_name": "Lombard St",
        //                         "street_number": "10",
        //                         "house_extension": "B",
        //                         "postal_code": "90210",
        //                         "city": "Beverly Hills",
        //                         "region": "CA",
        //                         "phone": "333444555",
        //                         "country": "US",
        //                         "care_of": "C/O",
        //                         "reference": "string",
        //                         "attention": "string"
        //                     }
        //                 }
        //             },
        //             "tms_reference": "a1b2c3d4-e4f6-g7h8-i9j0-k1l2m3n4o5p6",
        //             "selected_addons": [
        //                 {
        //                     "type": "string",
        //                     "price": 0,
        //                     "external_id": "string",
        //                     "user_input": "string"
        //                 }
        //             ]
        //         }
        //     ],
        //     "merchant_data": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
        //     "gui": {
        //         "options": [
        //             "string"
        //         ]
        //     },
        //     "merchant_requested": {
        //         "additional_checkbox": true,
        //         "additional_checkboxes": [
        //             {
        //                 "id": "string",
        //                 "checked": true
        //             }
        //         ]
        //     },
        //     "selected_shipping_option": {
        //         "id": "express_priority",
        //         "name": "EXPRESS 1-2 Days",
        //         "description": "Delivery by 4:30 pm",
        //         "promo": "Christmas Promotion",
        //         "price": 0,
        //         "preselected": true,
        //         "tax_amount": 0,
        //         "tax_rate": 0,
        //         "shipping_method": "PickUpStore",
        //         "delivery_details": {
        //             "carrier": "string",
        //             "class": "string",
        //             "product": {
        //                 "name": "string",
        //                 "identifier": "string"
        //             },
        //             "timeslot": {
        //                 "id": "string",
        //                 "start": "string",
        //                 "end": "string"
        //             },
        //             "pickup_location": {
        //                 "id": "string",
        //                 "name": "string",
        //                 "address": {
        //                     "given_name": "John",
        //                     "family_name": "Doe",
        //                     "organization_name": "string",
        //                     "email": "john@doe.com",
        //                     "title": "Mr",
        //                     "street_address": "Lombard St 10",
        //                     "street_address2": "Apt 214",
        //                     "street_name": "Lombard St",
        //                     "street_number": "10",
        //                     "house_extension": "B",
        //                     "postal_code": "90210",
        //                     "city": "Beverly Hills",
        //                     "region": "CA",
        //                     "phone": "333444555",
        //                     "country": "US",
        //                     "care_of": "C/O",
        //                     "reference": "string",
        //                     "attention": "string"
        //                 }
        //             }
        //         },
        //         "tms_reference": "a1b2c3d4-e4f6-g7h8-i9j0-k1l2m3n4o5p6",
        //         "selected_addons": [
        //             {
        //                 "type": "string",
        //                 "price": 0,
        //                 "external_id": "string",
        //                 "user_input": "string"
        //             }
        //         ]
        //     },
        //     "recurring": true,
        //     "recurring_token": "string",
        //     "recurring_description": "string",
        //     "billing_countries": [
        //         "string"
        //     ],
        //     "tags": [
        //         "string"
        //     ],
        //     "discount_lines": [
        //         {
        //             "name": "Super deal",
        //             "quantity": 5,
        //             "unit_price": -10000,
        //             "tax_rate": 1000,
        //             "total_amount": -2500,
        //             "total_tax_amount": -123,
        //             "reference": "645f54bb-dbb7-6e1f-83bd-bc81a2c3a258",
        //             "merchant_data": "{\"card_number\":\"5551234567890\"}"
        //         }
        //     ]
        // }

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', 'Authorization': auth },
        //     body: JSON.stringify(payload),
        //     mode: 'no-cors'
        // };
        // fetch('https://api.playground.klarna.com/checkout/v3/orders', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));
        const payload = {
            "purchase_country": "SE",
            "purchase_currency": "SEK",
            "locale": "sv_SE",
            "order_amount": 10,
            "order_tax_amount": 0,
            "order_lines": [{
                "type": "physical",
                "reference": "19-402",
                "name": "Battery Power Pack",
                "quantity": 1,
                "unit_price": 10,
                "tax_rate": 0,
                "total_amount": 10,
                "total_discount_amount": 0,
                "total_tax_amount": 0,
                "image_url": "https://www.exampleobjects.com/logo.png",
                "product_url": "https://www.estore.com/products/f2a8d7e34"
            }]
        }


        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Authorization: auth,
            },
            body: JSON.stringify(payload)
        };

        // fetch("https://api.playground.klarna.com/checkout/v3/orders", requestOptions)
        // .then(response => response.json())

        // const instance = axios.create({
        //     baseURL: "http://www.demoapp.com"
        //   });

        // axios.defaults.proxy = { host: "http://www.demoapp.com" };


        // await axios.post("https://api.playground.klarna.com/checkout/v3/orders", payload, {
        //     proxy: {
        //         host: 'http://www.demoapp.com',
        //         port: 5000
        //     },
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: auth,
        //     },

        // });

        // (async () => {
        //     const fetchHandler = {
        //       apply(target, thisArg, args) {
        //         console.log(args);
        //       },
        //     };

        //     const proxiedFetch = new Proxy(fetch, fetchHandler);

        await axios.post("https://api.playground.klarna.com/checkout/v3/orders", payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: auth,
            },
        });
        //   })();
    }


    return (
        <>
            <div className="w-full" id="unfilled" >

                <div className="w-full flex  py-[1rem]">
                    <h1 className="stepTitle px-[0.5rem]">3. Välj betalningssätt
                    </h1>
                </div>

                {checkstep === "check3" && (
                    <div className='w-full'>

                        <div className="flex w-full items-center">
                            <div className="flex flex-col w-full">
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    Value={selectValue}
                                    className='w-full'
                                    name="radio-buttons-group"
                                    onChange={onValueChange}
                                >
                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2]" >
                                        <Radio id="option1" value="option1" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option1')} />
                                        <div className='flex flex-row w-full justify-between cursor-pointer' onClick={() => { setSelectValue('option1') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Betala med kort</p>
                                            <div className='flex'>
                                                <img className="w-[30px] h-[23px]" src={postCard} />
                                                <img className="w-[41px] h-[23px]" src={postCard1} />
                                                <img className="w-[36px] h-[23px]" src={postCard2} />
                                            </div>
                                        </div>
                                    </div> {/* Option 1 */}

                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2]" >
                                        <Radio id="option2" value="option2" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option2')} />
                                        <div className='flex flex-row w-full justify-between cursor-pointer' onClick={() => { setSelectValue('option2') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Få först. Betala sen med klarna.</p>
                                            <img className="w-[51px] h-[29px]" src={postCard3} />
                                        </div>
                                    </div> {/* Option 2 */}

                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2]" >
                                        <Radio id="option3" value="option3" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option3')} />
                                        <div className='flex flex-row w-full justify-between cursor-pointer' onClick={() => { setSelectValue('option3') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Klarna Bankkonto</p>
                                            <img className="w-[51px] h-[29px]" src={postCard3} />
                                        </div>
                                    </div> {/* Option 3 */}

                                    <div className="flex py-[0.5rem] flex-row w-full border-b-[1px] border-[#D2D2D2]" >
                                        <Radio id="option4" value="option4" checkedIcon={<CheckCircleRoundedIcon className='text-[#76351A]' />} checked={isButtonSelected('option4')} />
                                        <div className='flex flex-row w-full justify-between cursor-pointer' onClick={() => { setSelectValue('option4') }}>
                                            <p className="text-[#222222] text-[16px] pl-[10px] font-normal font-rival">Dela upp betalningen med Klarna</p>
                                            <img className="w-[51px] h-[29px]" src={postCard3} />
                                        </div>
                                    </div> {/* Option 4 */}

                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex w-full justify-end py-[1rem]">
                            <button className="bg-[#76351A] w-[180px] h-[45px] text-[white] text-[11px]" onClick={async () => { await createOrder() }}>BETALA MED KORT</button> {/* Next step */}
                        </div>
                    </div>
                )}

            </div>

            <div className="" id="filled"></div>
        </>
    );
}

export default StepThree;