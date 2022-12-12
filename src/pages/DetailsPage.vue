<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img alt="movie-image" :src="data.image"/>
          </div>
          <div class="col-8">
            <h1>{{ data.fullTitle }}</h1>
            <strong>{{ data.plot }}</strong>
          </div>
        </div>
      </div>
    </header>

    <breadcrumbs class="container"></breadcrumbs>

    <section class="container">
      <div class="row">
        <div class="col-8">
          <div class="cast-block" v-for="cast in [
          { role: 'Director', persons: data.directors },
          { role: 'Writer', persons: data.writers },
          { role: 'Stars', persons: data.stars}]">
            <strong>{{ cast.role }}:</strong>&nbsp;<p>{{ cast.persons }}</p>
          </div>
        </div>
        <div class="col-4">
          <div class="rating-block">
            <div class="imdb">
              <h4>IMDb Rating</h4>
              <span class="star"></span><strong>{{ data.imDbRating }}</strong><span>/10</span>
            </div>
            <div class="time">
              <h4>Duration</h4>
              <span class="clock"></span><span>{{ data.runtimeStr }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="trailer">
            <h1>Trailer</h1>
            <iframe src="https://www.youtube.com/embed/RYExstiQlLc"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { defineComponent, onMounted } from 'vue';
import stateManagement from '@/composables/stateManagement';
import type { MovieId } from '@/types';

export default defineComponent({
  name: 'overview-page',
  components: {
    Breadcrumbs,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props: {
        id: string,
    }) {
    const { getLoadingState, getMovieDetailsState, loadMovieDetails } = stateManagement();
    const data = {
    "id": "tt0120815",
    "title": "Saving Private Ryan",
    "originalTitle": "",
    "fullTitle": "Saving Private Ryan (1998)",
    "type": "Movie",
    "year": "1998",
    "image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_Ratio0.6833_AL_.jpg",
    "releaseDate": "1998-07-24",
    "runtimeMins": "169",
    "runtimeStr": "2h 49min",
    "plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "Top rated movie #24 | Won 5 Oscars, 79 wins & 75 nominations total",
    "directors": "Steven Spielberg",
    "directorList": [
        {
            "id": "nm0000229",
            "name": "Steven Spielberg"
        }
    ],
    "writers": "Robert Rodat",
    "writerList": [
        {
            "id": "nm0734441",
            "name": "Robert Rodat"
        }
    ],
    "stars": "Tom Hanks, Matt Damon, Tom Sizemore",
    "starList": [
        {
            "id": "nm0000158",
            "name": "Tom Hanks"
        },
        {
            "id": "nm0000354",
            "name": "Matt Damon"
        },
        {
            "id": "nm0001744",
            "name": "Tom Sizemore"
        }
    ],
    "actorList": [
        {
            "id": "nm0000158",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Tom Hanks",
            "asCharacter": "Captain Miller"
        },
        {
            "id": "nm0000354",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Matt Damon",
            "asCharacter": "Private Ryan"
        },
        {
            "id": "nm0001744",
            "image": "https://m.media-amazon.com/images/M/MV5BNjA3NjA0MzIwOV5BMl5BanBnXkFtZTYwNzk5NDE1._V1_Ratio1.0000_AL_.jpg",
            "name": "Tom Sizemore",
            "asCharacter": "Sergeant Horvath"
        },
        {
            "id": "nm0122653",
            "image": "https://m.media-amazon.com/images/M/MV5BMTY1MTU0NjIyMl5BMl5BanBnXkFtZTcwODc3OTc1MQ@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Edward Burns",
            "asCharacter": "Private Reiben"
        },
        {
            "id": "nm0001608",
            "image": "https://m.media-amazon.com/images/M/MV5BMjA3NTA1NDM1M15BMl5BanBnXkFtZTYwNDE0Mzgy._V1_Ratio1.0000_AL_.jpg",
            "name": "Barry Pepper",
            "asCharacter": "Private Jackson"
        },
        {
            "id": "nm0004965",
            "image": "https://m.media-amazon.com/images/M/MV5BMTUxMjExNTE2M15BMl5BanBnXkFtZTgwODY3NzU2ODE@._V1_Ratio1.0000_AL_.jpg",
            "name": "Adam Goldberg",
            "asCharacter": "Private Mellish"
        },
        {
            "id": "nm0004874",
            "image": "https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Vin Diesel",
            "asCharacter": "Private Caparzo"
        },
        {
            "id": "nm0000610",
            "image": "https://m.media-amazon.com/images/M/MV5BMTk2MDAwMTQ5OV5BMl5BanBnXkFtZTcwNjY0MzY1Mw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Giovanni Ribisi",
            "asCharacter": "T"
        },
        {
            "id": "nm0001111",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg4MDMwOTQyMF5BMl5BanBnXkFtZTcwNDQxMzc0Mw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Jeremy Davies",
            "asCharacter": "Corporal Upham"
        },
        {
            "id": "nm0001101",
            "image": "https://m.media-amazon.com/images/M/MV5BMTYwOTQzNDM3OF5BMl5BanBnXkFtZTcwODQ3MDgzMw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Ted Danson",
            "asCharacter": "Captain Hamill"
        },
        {
            "id": "nm0316079",
            "image": "https://m.media-amazon.com/images/M/MV5BOTc0MDAzMTU4N15BMl5BanBnXkFtZTcwNzA0NzcwNA@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Paul Giamatti",
            "asCharacter": "Sergeant Hill"
        },
        {
            "id": "nm0001199",
            "image": "https://m.media-amazon.com/images/M/MV5BMTkxMzE0NTU2OV5BMl5BanBnXkFtZTYwODQxODc1._V1_Ratio1.0000_AL_.jpg",
            "name": "Dennis Farina",
            "asCharacter": "Lieutenant Colonel Anderson"
        },
        {
            "id": "nm0821152",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Joerg Stadler",
            "asCharacter": "Steamboat Willie"
        },
        {
            "id": "nm0242882",
            "image": "https://m.media-amazon.com/images/M/MV5BNDU5ODExN2QtMjRkMi00MWYwLTliMmItMzQ1NDQ0OTlkMWZmXkEyXkFqcGdeQXVyMzM3NTk5Nw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Max Martini",
            "asCharacter": "Corporal Henderson"
        },
        {
            "id": "nm0116465",
            "image": "https://m.media-amazon.com/images/M/MV5BMTI5MzczNjY2OF5BMl5BanBnXkFtZTcwMzk1MDEzMQ@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Dylan Bruno",
            "asCharacter": "Toynbe"
        },
        {
            "id": "nm0148738",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Daniel Cerqueira",
            "asCharacter": "Weller"
        },
        {
            "id": "nm0330983",
            "image": "https://m.media-amazon.com/images/M/MV5BMWY0YzM1MDYtZTU1Ni00NDUxLTg3YTgtNTMzNWNhYWUwM2ExXkEyXkFqcGdeQXVyODk3OTY5OA@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Demetri Goritsas",
            "asCharacter": "Parker"
        },
        {
            "id": "nm0692139",
            "image": "https://m.media-amazon.com/images/M/MV5BNjA4MWM5ODgtZGMyNS00OTNlLWE4MjktYjRjMTczMDYxODNiXkEyXkFqcGdeQXVyMTQwNjM5Mw@@._V1_Ratio1.0000_AL_.jpg",
            "name": "Ian Porter",
            "asCharacter": "Trask"
        }
    ],
    "fullCast": null,
    "genres": "Drama, War",
    "genreList": [
        {
            "key": "Drama",
            "value": "Drama"
        },
        {
            "key": "War",
            "value": "War"
        }
    ],
    "companies": "Dreamworks Pictures, Paramount Pictures, Amblin Entertainment",
    "companyList": [
        {
            "id": "co0819670",
            "name": "Dreamworks Pictures"
        },
        {
            "id": "co0023400",
            "name": "Paramount Pictures"
        },
        {
            "id": "co0009119",
            "name": "Amblin Entertainment"
        }
    ],
    "countries": "USA",
    "countryList": [
        {
            "key": "USA",
            "value": "USA"
        }
    ],
    "languages": "English, French, German, Czech",
    "languageList": [
        {
            "key": "English",
            "value": "English"
        },
        {
            "key": "French",
            "value": "French"
        },
        {
            "key": "German",
            "value": "German"
        },
        {
            "key": "Czech",
            "value": "Czech"
        }
    ],
    "contentRating": "R",
    "imDbRating": "8.6",
    "imDbRatingVotes": "1385601",
    "metacriticRating": "91",
    "ratings": null,
    "wikipedia": null,
    "posters": null,
    "images": null,
    "trailer": null,
    "boxOffice": {
        "budget": "$70,000,000 (estimated)",
        "openingWeekendUSA": "$30,576,104",
        "grossUSA": "$217,049,603",
        "cumulativeWorldwideGross": "$482,349,603"
    },
    "tagline": null,
    "keywords": "world war two,rescue mission,d day,year 1944,u.s. army",
    "keywordList": [
        "world war two",
        "rescue mission",
        "d day",
        "year 1944",
        "u.s. army"
    ],
    "similars": [
        {
            "id": "tt0120689",
            "title": "The Green Mile",
            "image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.6"
        },
        {
            "id": "tt0109830",
            "title": "Forrest Gump",
            "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6957_AL_.jpg",
            "imDbRating": "8.8"
        },
        {
            "id": "tt0172495",
            "title": "Gladiator",
            "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.5"
        },
        {
            "id": "tt0108052",
            "title": "Schindler's List",
            "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "9.0"
        },
        {
            "id": "tt0114369",
            "title": "Se7en",
            "image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.6"
        },
        {
            "id": "tt0102926",
            "title": "The Silence of the Lambs",
            "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.6"
        },
        {
            "id": "tt0133093",
            "title": "The Matrix",
            "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.7"
        },
        {
            "id": "tt1375666",
            "title": "Inception",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.8"
        },
        {
            "id": "tt0110912",
            "title": "Pulp Fiction",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6860_AL_.jpg",
            "imDbRating": "8.9"
        },
        {
            "id": "tt0099685",
            "title": "Goodfellas",
            "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.7"
        },
        {
            "id": "tt0111161",
            "title": "The Shawshank Redemption",
            "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "9.3"
        },
        {
            "id": "tt0407887",
            "title": "The Departed",
            "image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.5"
        }
    ],
    "tvSeriesInfo": null,
    "tvEpisodeInfo": null,
    "errorMessage": null
};
    onMounted( async () => {
      await loadMovieDetails(props.id as unknown as MovieId);
    })
    return {
      id: props.id,
      getLoadingState,
      data,
    }
  }
})
</script>

<style lang="scss" scoped>
  header {
    background-color: black;
    margin: auto;
    padding: 40px;
    img {
      max-width: 100%;
    }
    h1, strong {
      color: white
    }
  }
  .cast-block {
    border-radius: 10px;
    background-color: lightgrey;
    margin: 10px 0px 10px 0px;
    padding: 0px 15px 0px 15px;
    @media only screen and (max-width: 54em) {
      strong {
        font-size: 0.75rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
    strong {
      display: inline-block;
    }
    p {
      display: inline-block;
    }
  }
  .rating-block {
    text-align: center;
      h4 {
          margin-bottom: 0px;
      }
      .imdb {
        .star:after {
          margin-right: 5px;
          color: orange;
          content: "\2605";
        }
      }
      .time {
        .clock:after {
          margin-right: 5px;
          content: "\1F552"
        }
      }
  }
  .trailer {
    border-radius: 10px;
    padding: 30px;
    background-color: lightgray;
    h1 {
      margin-top: 0px;
    }
    iframe {
      width: 100%;
      height: 480px;
      @media only screen and (max-width: 51.25em) {
            height: 300px;
      }
      @media only screen and (max-width: 54em) {
            height: 200px;
      }
    }
  }
</style>
