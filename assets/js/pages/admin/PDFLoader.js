import React from 'react'
import { PDFDownloadLink, 
    Page, 
    Text, 
    View, 
    Document, 
    StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    header: {
        fontSize: 14
    }
  });

const CouponPDF = ({ credits }) => {
    return (
        <Document>
                <Page size='A4' style={styles.page}>
                    {
                        credits.map(({ amount, pin}) => {
                            return (
                                <View style={styles.section} key={ pin }>
                                    <Text style={styles.header}>{ amount}</Text>
                                    <Text>{ pin }</Text>
                                </View>
                            )
                        })
                    }
                </Page>
        </Document>
    )
}

export default function CouponPDFLink(props) {
    const PDFDoc = <CouponPDF {...props} />
    
    return (
        <PDFDownloadLink className="border border-primary px-3 py-2" document={PDFDoc}>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Coupon PDF')}
        </PDFDownloadLink>
    )
}