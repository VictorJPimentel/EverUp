--Part A:

	select count(*) from actors union all
--
	select count(*) from directors union all
--
	select count(*) from movies union all
--
	select count(*) from movie_revenue union all

	select count(*) from movie_actors



--Part B-1:
	SELECT movie_name, release_date from movies;

--Part B-2:
	SELECT firstname, last_name from WHERE nationality ='American';

--Part B-3:
	SELECT first_name, last_name, gender, date_of_birth from WHERE gender = 'M' and date_of_birth > '1970-01-01';

--Part B-4
	SELECT movie_name from movies WHERE movie_length > 90 and movie_lang = 'English'


--Part C-1
	SELECT movie_name, movie_lang from movies WHERE movie_lang IN('English' , 'Spanish', 'Korean')s
--Part C-2
	SELECT first_name, last_name from actors WHERE last_name like 'M%' and dateof_birth '1940-01-01' and date_of_birth < '1969-12-31'
--Part C-3
	SELECT first_name, last_name from directorss WHERE nationality IN('British', 'French', 'German') and date_of_birth > '1950-01-01' and date_of_birth < '1980-12-31';
