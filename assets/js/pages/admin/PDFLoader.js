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
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingBottom: 25
    },
    section: {
      margin: 5,
      padding: 10,
      flexGrow: 1,
      paddingLeft: 15,
      paddingRight: 15,
      width: 150
    },
    header: {
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: "center",
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 100     
    },
    heroText: {
        textAlign: 'center',
        fontSize: 12,
    },
    pin: {
        textTransform: 'uppercase',
        textAlign: "center",
        fontSize: 12
    },
    note: {
        fontSize: 5,
        fontStyle: 'italic',
        textAlign: "center",
        marginTop: 2
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
                                    <Text style={styles.heroText}>CBTor Coupon</Text>
                                    <Text style={styles.header}>{ amount} CEC</Text>
                                    <Text style={styles.pin}>Pin: { pin }</Text>
                                    <Text style={styles.note}>Note: deduction of 10 CEC will be made per exam taken</Text>
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