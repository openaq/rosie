# Rosie

![](https://media.giphy.com/media/3nJhJtq110IP6/giphy.gif)

Rosie is a simple Lambda function designed to be run against the OpenAQ PostgreSQL database and delete datapoints older than a certain number of days (defaults to 90 days).

## Environment Variables

For the code to work, the following env variables needed to be provided to the Lambda function.

| Name | Description | Default |
|---|---|---|
| PSQL_HOST | PostgeSQL host | not set |
| PSQL_PASSWORD | PostgreSQL password | not set |
| PSQL_DATABASE | Name of database | not set |
| PSQL_USER | Name of user | not set |
| NUM_DAYS | Number of days to retain data for | 90 |