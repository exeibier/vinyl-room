const airtable = require('airtable');

const base = new airtable({apiKey: `${process.env.AIRTABLE_API_KEY}`}).base(`${process.env.AIRTABLE_BASE_ID}`);
const table = base(`${process.env.AIRTABLE_TABLE_NAME}`);

const minifyRecords = (records: any) => {
    return records.map((record: any) => getMinifiedRecord(record));
};
const getMinifiedRecord = (record: any) => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

export { table, getMinifiedRecord, minifyRecords };
