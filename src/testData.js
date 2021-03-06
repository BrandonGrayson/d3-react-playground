const testData = {
    "patient_information": {
      "mrn": "314152",
      "patient_name": "John Wick",
      "cancer_type": "None",
      "gender": "Male",
      "age": "50"
    },
    "mh": [
      {
        "assessment_date": "4/18/18",
        "mhid": "mh-1234-01",
        "mhseq": "1",
        "llt_name": "hepatits B",
        "llt_cd": "10019731",
        "pt_name": "Hepatitis B",
        "pt_cd": "10019731",
        "hlt_name": "hepatic viral infections",
        "hlt_cd": "10057212",
        "hlgt_name": "hepatic and hepatobiliary disorders",
        "hlgt_cd": "10019654",
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": "cm-1234-01",
        "Link_PROC": null
      },
      {
        "assessment_date": "4/18/18",
        "mhid": "mh-1234-02",
        "mhseq": "2",
        "llt_name": "hepatic cirrhosis",
        "llt_cd": "10019641",
        "pt_name": null,
        "pt_cd": null,
        "hlt_name": "hepatic fibrosis or cirrhosis",
        "hlt_cd": "10019669",
        "hlgt_name": null,
        "hlgt_cd": null,
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": null,
        "Link_PROC": null
      },
      {
        "assessment_date": "4/18/18",
        "mhid": "mh-1234-01",
        "mhseq": "1",
        "llt_name": "hepatits B",
        "llt_cd": "10019731",
        "pt_name": "Hepatitis B",
        "pt_cd": "10019731",
        "hlt_name": "hepatic viral infections",
        "hlt_cd": "10057212",
        "hlgt_name": "hepatic and hepatobiliary disorders",
        "hlgt_cd": "10019654",
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": "cm-1234-01",
        "Link_PROC": null
      },
      {
        "assessment_date": "4/18/18",
        "mhid": "mh-1234-02",
        "mhseq": "2",
        "llt_name": "hepatic cirrhosis",
        "llt_cd": "10019641",
        "pt_name": null,
        "pt_cd": null,
        "hlt_name": "hepatic fibrosis or cirrhosis",
        "hlt_cd": "10019669",
        "hlgt_name": null,
        "hlgt_cd": null,
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": null,
        "Link_PROC": null
      },
      {
        "assessment_date": "6/17/18",
        "mhid": "mh-1234-01",
        "mhseq": "1",
        "llt_name": "hepatits B",
        "llt_cd": "10019731",
        "pt_name": "Hepatitis B",
        "pt_cd": "10019731",
        "hlt_name": "hepatic viral infections",
        "hlt_cd": "10057212",
        "hlgt_name": "hepatic and hepatobiliary disorders",
        "hlgt_cd": "10019654",
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": null,
        "Link_CE": null,
        "Link_CM": "cm-1234-01",
        "Link_PROC": null
      },
      {
        "assessment_date": "6/17/18",
        "mhid": "mh-1234-02",
        "mhseq": "2",
        "llt_name": "hepatic cirrhosis",
        "llt_cd": "10019641",
        "pt_name": null,
        "pt_cd": null,
        "hlt_name": "hepatic fibrosis or cirrhosis",
        "hlt_cd": "10019669",
        "hlgt_name": null,
        "hlgt_cd": null,
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": null,
        "Link_PROC": null
      },
      {
        "assessment_date": "7/16/18",
        "mhid": "mh-1234-01",
        "mhseq": "1",
        "llt_name": "hepatits B",
        "llt_cd": "10019731",
        "pt_name": "Hepatitis B",
        "pt_cd": "10019731",
        "hlt_name": "hepatic viral infections",
        "hlt_cd": "10057212",
        "hlgt_name": "hepatic and hepatobiliary disorders",
        "hlgt_cd": "10019654",
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": "cm-1234-01",
        "Link_PROC": null
      },
      {
        "assessment_date": "7/16/18",
        "mhid": "mh-1234-02",
        "mhseq": "2",
        "llt_name": "hepatic cirrhosis",
        "llt_cd": "10019641",
        "pt_name": null,
        "pt_cd": null,
        "hlt_name": "hepatic fibrosis or cirrhosis",
        "hlt_cd": null,
        "hlgt_name": null,
        "hlgt_cd": "10019669",
        "start date": "1/1/10",
        "end date": null,
        "is_ongoing": true,
        "Link_CE": null,
        "Link_CM": null,
        "Link_PROC": null
      }
    ],
    "cm": [
      {
        "orderid": null,
        "mrn": null,
        "CMID": "cm-1234-01",
        "CMSEQ": "1",
        "name": "entecavir",
        "rxcui": "485436",
        "cm_class": "ANTIVIRALS FOR SYSTEMIC USE",
        "cm_class_cd": "J05AF10",
        "indication": "Hepatitis B",
        "rx_start_date": "01-20-2008",
        "rx_end_date": "04-01-2010",
        "rx_assessment_date": "4-26-18",
        "is_ongoing": false,
        "dose_change": false,
        "dose_change_reason": null,
        "route": "oral",
        "route_cd": null,
        "dose": "1",
        "dose units": "mg",
        "dose frequency": "daily",
        "assoc_ce_cause(*ce)": null,
        "assoc_ce_treat": null,
        "assoc_mh_cause(*mh)": null,
        "assoc_mh_treat(*mh)": "Hepatitis B",
        "assoc_med_cause": null,
        "assoc_oncmed_prophy(*oh)": null,
        "type": "Development"
      },
      {
        "orderid": "12",
        "mrn": null,
        "CMID": "cm-1234-02",
        "CMSEQ": "2",
        "name": "amlodipine",
        "rxcui": null,
        "cm_class": null,
        "cm_class_cd": null,
        "indication": "high blood pressure",
        "rx_start_date": "03-12-2010",
        "rx_end_date": "01-12-2011",
        "rx_assessment_date": "5-25-12",
        "is_ongoing": true,
        "dose_change": false,
        "dose_change_reason": null,
        "route": "oral",
        "route_cd": null,
        "dose": "2",
        "dose units": "mg",
        "dose frequency": "daily",
        "assoc_ce_cause(*ce)": null,
        "assoc_ce_treat": "high blood pressure",
        "assoc_mh_cause(*mh)": null,
        "assoc_mh_treat(*mh)": null,
        "assoc_med_cause": "sorafenib",
        "assoc_oncmed_prophy(*oh)": null, 
        "type": "coding"
      },
      {
        "orderid": "12",
        "mrn": null,
        "CMID": "cm-1234-02",
        "CMSEQ": "2",
        "name": "amlodipine",
        "rxcui": null,
        "cm_class": null,
        "cm_class_cd": null,
        "indication": "high blood pressure",
        "rx_start_date": "07-13-2013",
        "rx_end_date": "07-30-2013",
        "rx_assessment_date": "1-25-10",
        "is_ongoing": true,
        "dose_change": false,
        "dose_change_reason": null,
        "route": "oral",
        "route_cd": null,
        "dose": "3",
        "dose units": "mg",
        "dose frequency": "daily",
        "assoc_ce_cause(*ce)": null,
        "assoc_ce_treat": "high blood pressure",
        "assoc_mh_cause(*mh)": null,
        "assoc_mh_treat(*mh)": null,
        "assoc_med_cause": "sorafenib",
        "assoc_oncmed_prophy(*oh)": null,
        "type": "promotion"
      },
      {
        "orderid": "12",
        "mrn": null,
        "CMID": "cm-1234-02",
        "CMSEQ": "2",
        "name": "amlodipine",
        "rxcui": null,
        "cm_class": null,
        "cm_class_cd": null,
        "indication": "high blood pressure",
        "rx_start_date": "05-30-2014",
        "rx_end_date": "06-20-2015",
        "rx_assessment_date": "6-18-14",
        "is_ongoing": true,
        "dose_change": false,
        "dose_change_reason": null,
        "route": "oral",
        "route_cd": null,
        "dose": "4",
        "dose units": "mg",
        "dose frequency": "daily",
        "assoc_ce_cause(*ce)": null,
        "assoc_ce_treat": "high blood pressure",
        "assoc_mh_cause(*mh)": null,
        "assoc_mh_treat(*mh)": null,
        "assoc_med_cause": "sorafenib",
        "assoc_oncmed_prophy(*oh)": null,
        "type": "celebration"
      },
      {
        "orderid": "12",
        "mrn": null,
        "CMID": "cm-1234-02",
        "CMSEQ": "2",
        "name": "amlodipine",
        "rxcui": null,
        "cm_class": null,
        "cm_class_cd": null,
        "indication": "high blood pressure",
        "rx_start_date": "09-23-2016",
        "rx_end_date": "10-20-2017",
        "rx_assessment_date": "7-16-16",
        "is_ongoing": false,
        "dose_change": false,
        "dose_change_reason": null,
        "route": "oral",
        "route_cd": null,
        "dose": "5",
        "dose units": "mg",
        "dose frequency": "daily",
        "assoc_ce_cause(*ce)": null,
        "assoc_ce_treat": "high blood pressure",
        "assoc_mh_cause(*mh)": null,
        "assoc_mh_treat(*mh)": null,
        "assoc_med_cause": "sorafenib",
        "assoc_oncmed_prophy(*oh)": null,
        "type": "celebration"
      }
    ],
    "pr": [
      {
        "orderid": null,
        "mrn": null,
        "assessment_date": "4/18/18",
        "prid": null,
        "prseq": null,
        "procedure_name": "Open reduction of fracture of clavicle with internal fixation (procedure)",
        "procedure_code": "608779000",
        "procedure_category": null,
        "indication": "trauma",
        "procedure_dose": null,
        "procedure_dose_units": null,
        "Procedure_location": "clavicle",
        "Procedure_laterality": "left",
        "procedure_start_date": "10/24/14",
        "procedure_end_date": "10/24/14",
        "assoc_ce_treat": null,
        "assoc_mh_treat(*mh)": null
      },
      {
        "orderid": null,
        "mrn": null,
        "assessment_date": "4/18/18",
        "prid": null,
        "prseq": null,
        "procedure_name": "Insertion of pleural tube drain (procedure)",
        "procedure_code": "264957007",
        "procedure_category": null,
        "indication": "trauma",
        "procedure_dose": null,
        "procedure_dose_units": null,
        "Procedure_location": "chest wall",
        "Procedure_laterality": "left",
        "procedure_start_date": "10/24/14",
        "procedure_end_date": "10/24/14",
        "assoc_ce_treat": null,
        "assoc_mh_treat(*mh)": null
      },
      {
        "orderid": null,
        "mrn": null,
        "assessment_date": "4/18/18",
        "prid": null,
        "prseq": null,
        "procedure_name": "Colectomy and side to side anastomosis of ileum to colon (procedure)",
        "procedure_code": "448050005",
        "procedure_category": null,
        "indication": "trauma",
        "procedure_dose": null,
        "procedure_dose_units": null,
        "Procedure_location": "colon",
        "Procedure_laterality": "right",
        "procedure_start_date": "2/10/17",
        "procedure_end_date": "2/10/17",
        "assoc_ce_treat": null,
        "assoc_mh_treat(*mh)": null
      },
      {
        "orderid": null,
        "mrn": null,
        "assessment_date": "7/16/18",
        "prid": null,
        "prseq": null,
        "procedure_name": "Open reduction of fracture of clavicle with internal fixation (procedure)",
        "procedure_code": "608779000",
        "procedure_category": null,
        "indication": "trauma",
        "procedure_dose": null,
        "procedure_dose_units": null,
        "Procedure_location": "clavicle",
        "Procedure_laterality": "left",
        "procedure_start_date": "10/24/14",
        "procedure_end_date": "10/24/14",
        "assoc_ce_treat": null,
        "assoc_mh_treat(*mh)": null
      }
    ]
  }


export default testData