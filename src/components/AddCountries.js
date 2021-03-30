import React, { useState } from 'react'
import { Formik, useFormik, Form, Field } from 'formik'
import { TextField, Button } from '@material-ui/core'
import * as Yup from 'yup'

let schema = Yup.object().shape({
    countryName: Yup.string().required('Required'),
    capital: Yup.string().required('Required'),
    population: Yup.string().required('Required'),
    speciality: Yup.string().required('Required'),
})


const AddCountries = () => {
     const [currentId, setCurrentId] = useState("")

    const formik = useFormik({

        initialValues: {
            countryName: "",
            capital: "",
            population: "",
            speciality: ""
        },
        onSubmit: (values) => {
            console.log(values)
             fetch(`/.netlify/functions/addCountries`, {
                 method: "post",
                 body: JSON.stringify(values)
             })
                 .then(res => res.json())
                 .then(data => {
                     setCurrentId(data)
                     console.log(data)
                     
                 })
                 .catch(error => console.log(error))

        },

        validationSchema: schema
    })

    return (
        <div>
            <Formik formik={formik}>
                <Form onSubmit={formik.handleSubmit} autoComplete="off" >
                    <div>
                        <Field as={TextField} name="countryName" label="Country" value={formik.values.countryName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.countryName && formik.touched.countryName}
                            helperText={formik.errors.countryName && formik.touched.countryName ? formik.errors.countryName : null}

                        />
                        <Field as={TextField} name="capital" label="Capital"
                            value={formik.values.capital}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.capital && formik.touched.capital}
                            helperText={formik.errors.capital && formik.touched.capital ? formik.errors.capital : null}

                        />
                    </div>

                    <div>
                        <Field as={TextField} name="population" label="Population"
                            value={formik.values.population}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.population && formik.touched.population}
                            helperText={formik.errors.population && formik.touched.population ? formik.errors.population : null}
                        />
                        <Field as={TextField} name="speciality" label="Speciality"
                            value={formik.values.speciality}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.speciality && formik.touched.speciality}
                            helperText={formik.errors.speciality && formik.touched.speciality ? formik.errors.speciality : null}
                        />

                        <Button type="submit" variant="contained"> ADD Details</Button>
                    </div>



                </Form>
            </Formik>
            <div>{currentId.id}</div>
        </div>
    )
}

export default AddCountries
