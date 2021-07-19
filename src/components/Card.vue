<template>
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="text-center">{{ pais.name }}</h5>
            <p class="text-center">
                <img :src="pais.flag" class="img-fluid w-50" :alt="`bandera-${pais.name}`">
            </p>
            <p class="card-text">
                <span class="badge bg-danger p-3 mb-1 d-block">
                    Población: {{ numeroFormateado(pais.population) }}
                </span>
                <span class="badge bg-primary mb-1 d-block">
                    Nombre Nativo: {{ pais.nativeName }}
                </span>
                <span class="badge bg-primary mb-1 d-block">
                    Capital: {{ pais.capital }}
                </span>
                <span class="badge bg-primary mb-1 d-block">
                    Continente: {{ pais.region }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pais'],
    setup() {
        const numeroFormateado = ((num) => {
            return new Intl.NumberFormat("es-ES").format(num)
        })

        return { numeroFormateado }
    },
}
</script>