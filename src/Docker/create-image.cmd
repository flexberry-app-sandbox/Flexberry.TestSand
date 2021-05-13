docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testsand/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testsand/app ../..
