'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Grid,
  GridItem,
  Image,
  Badge,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box minH="100vh">
      {/* Darker background section behind hero - full width */}
      <Box bg="#F0E4D1" pb={8}>
        <Container maxW="1100px" pt={6} px={4}>
          {/* Hero/Bio Card Section */}
          <Box
              bg="#fef5e7"
              borderRadius="20px"
              border="3px solid"
              borderColor="black"
              overflow="hidden"
              boxShadow="8px 8px 0 0 rgba(0, 0, 0, 1)"
            >
            <Grid templateColumns={{ base: '1fr', md: '25% 75%' }} minH="400px">
              {/* Profile Photo */}
              <GridItem
                bgImage="url(https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/51p6258lbb2jz2i/149430402b2b44e8901aba4b38eaac8f/original/picture.jpeg)"
                bgSize="cover"
                bgPosition="center"
                borderTopLeftRadius="18px"
                borderBottomLeftRadius="18px"
              />

              {/* Bio Content */}
              <GridItem p={{ base: 8, md: 12 }} display="flex" flexDirection="column" justifyContent="center">
                <VStack spacing={6} align="start">
                  <Heading
                    as="h1"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="900"
                    color="gray.900"
                  >
                    Annus Zulfiqar
                  </Heading>

                  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8" color="gray.800">
                    I'm a PhD candidate in the Computer Science and Engineering department at the
                    University of Michigan, Ann Arbor, advised by professor{' '}
                    <Link href="https://gitlab.com/mshahbaz/mshahbaz.gitlab.io/-/wikis/home"
                      color="#204C8E" fontWeight="bold" textDecoration="underline" isExternal>
                      Muhammad Shahbaz
                    </Link>
                    . My research is about rethinking data plane architectures and algorithms to
                    build scalable networked systems that overcome traditional resource limitations
                    and adapt quickly to dynamic network conditions.
                  </Text>

                  <HStack spacing={4} flexWrap="wrap" fontSize={{ base: 'sm', md: 'md' }}>
                    <Link href="https://annuszulfiqar2021.github.io/files/AnnusZulfiqarCV.pdf"
                      color="#204C8E" textDecoration="underline" isExternal>
                      📝Academic CV
                    </Link>
                    <Link href="https://scholar.google.com/citations?user=4Z5gV_0AAAAJ&hl=en&oi=ao"
                      color="#204C8E" textDecoration="underline" isExternal>
                      🎓Google Scholar
                    </Link>
                    <Link href="https://github.com/annuszulfiqar2021"
                      color="#204C8E" textDecoration="underline" isExternal>
                      🚀Github
                    </Link>
                    <Link href="mailto:zulfiqaa@umich.edu"
                      color="#204C8E" textDecoration="underline">
                      📬Email
                    </Link>
                    <Link href="https://www.linkedin.com/in/annuszulfiqar/"
                      color="#204C8E" textDecoration="underline" isExternal>
                      💼LinkedIn
                    </Link>
                    <Link href="https://dblp.org/pid/255/7879.html"
                      color="#204C8E" textDecoration="underline" isExternal>
                      📋DBLP
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Publications Section - normal cream background */}
      <Container maxW="1100px" px={4} py={12}>
        <VStack spacing={0} align="stretch">
            <Heading as="h2" fontSize="4xl" fontWeight="900" color="gray.900" mb={8}>
              Publications
            </Heading>

            {/* PhD Dissertation */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/da071e43862b442f90229d8741ab1180/original/front.png"
                  alt="PhD Dissertation"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                  fallbackSrc="https://via.placeholder.com/400x300/fef5e7/204C8E?text=Dissertation"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    PhD Dissertation
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    Rearchitecting the End Host Network for the Terabit Per Second Era
                  </Heading>
                  <Text fontSize="md" fontWeight="bold" fontStyle="italic">
                    Annus Zulfiqar
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://annuszulfiqar2021.github.io/papers/zulfiqar-dissertation.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      PDF
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/final-defense-v2.0.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Slides
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* SpliDT - NSDI 2026 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/9275487d188449a3a3b3a773efe9c938/original/splidt.png"
                  alt="SpliDT"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    NSDI 2026
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    SpliDT: Partitioned Decision Trees for Scalable Stateful Inference at Line Rate
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    Murayyiam Parvez*, <em>Annus Zulfiqar*</em>, Roman Beltiukov, Shir Landau-Feibish, Walter Willinger, Arpit Gupta, Muhammad Shahbaz{' '}
                    <Text as="span" fontWeight="bold" fontStyle="italic">(*co-primary author)</Text>
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://annuszulfiqar2021.github.io/papers/splidt-cr.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/splidt-poster.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Extended Abstract
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/branchpipe-nsdi.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Poster
                    </Link>
                    <Link href="https://dl.acm.org/doi/epdf/10.1145/3718958.3750475" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      SIGCOMM Shorts
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* OptiNIC - ARXIV 2025 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/95aa8ab6cc3a496496eb95a88ee34cd9/original/Screenshot-2025-12-29-at-7.43.01-PM.png"
                  alt="OptiNIC"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    ARXIV 2025
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    OptiNIC: A Resilient and Tail-Optimal RDMA NIC for Distributed ML Workloads
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    Ertza Warraich, Ali Imran, <em>Annus Zulfiqar</em>, Shay Vargaftik, Sonia Fahmy, Muhammad Shahbaz
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://arxiv.org/abs/2512.22743" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* IEEE CAL 2025 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/2d33c9d5fe2747c79abc06b7daf9e23a/original/ieee-cal.png"
                  alt="IEEE CAL"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    IEEE CAL 2025
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    Reimagining RDMA Through the Lens of ML
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    Ertza Warraich, Ali Imran, <em>Annus Zulfiqar</em>, Shay Vargaftik, Sonia Fahmy, and Muhammad Shahbaz
                  </Text>
                  <Badge colorScheme="orange" fontSize="xs" mb={1}>
                    🎖️ Broadcom Research Award
                  </Badge>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://www.computer.org/csdl/journal/ca/5555/01/11214426/2b1fldkBhXW" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* Kairo - SIGCOMM 2025 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/040a37b9fd3b48cbaf66703a7e01efbf/original/kairo.png"
                  alt="Kairo"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    SIGCOMM 2025 Poster
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    Kairo: Incremental View Maintenance for Scalable Virtual Switch Caching
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    <em>Annus Zulfiqar</em>, Ben Pfaff, Gianni Antichi, Muhammad Shahbaz
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://dl.acm.org/doi/10.1145/3744969.3748406" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Extended Abstract
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/sigcomm-2025-kairo-poster.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Poster
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* Gigaflow - ASPLOS 2025 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/a389549bc7c644558426c7cc250df97e/original/gigaflow.png"
                  alt="Gigaflow"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    ASPLOS 2025
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    Gigaflow: Pipeline-Aware Sub-Traversal Caching for Modern SmartNICs
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    <em>Annus Zulfiqar</em>, Ali Imran, Venkat Kunaparaju, Ben Pfaff, Gianni Antichi, Muhammad Shahbaz
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://dl.acm.org/doi/10.1145/3676641.3716000" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                    <Link href="https://github.com/gigaflow-vswitch" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Code
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=tewxcn6uBHY" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Talk-20min
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=59BQcbSxgRo" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Talk-40min
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/gigaflow-poster-nsdi2025.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Extended Abstract
                    </Link>
                    <Link href="https://annuszulfiqar2021.github.io/papers/gigaflow-nsdi-poster.pdf" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Poster
                    </Link>
                  </HStack>
                  <Box mt={2}>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>Media Coverage:</Text>
                    <VStack align="start" spacing={0.5} fontSize="xs">
                      <Link href="https://p4.org/gigaflow-modern-smartnics/" color="#204C8E" textDecoration="underline" isExternal>
                        Gigaflow: Modern SmartNICs - P4.org
                      </Link>
                      <Link href="https://cse.engin.umich.edu/stories/streamlining-cloud-traffic-with-a-gigaflow-cache" color="#204C8E" textDecoration="underline" isExternal>
                        Streamlining Cloud Traffic with a Gigaflow Cache - UMich CSE
                      </Link>
                      <Link href="https://danglingpointers.substack.com/p/gigaflow-pipeline-vswitch-smartnic" color="#204C8E" textDecoration="underline" isExternal>
                        Gigaflow: Pipeline vSwitch on SmartNIC - Dangling Pointers
                      </Link>
                      <Link href="https://techxplore.com/news/2025-04-gigaflow-cache-cloud-traffic-higher.html" color="#204C8E" textDecoration="underline" isExternal>
                        Gigaflow Cache for Cloud Traffic - TechXplore
                      </Link>
                      <Link href="https://knowridge.com/2025/04/scientists-boost-cloud-speed-with-new-gigaflow-memory-system/" color="#204C8E" textDecoration="underline" isExternal>
                        Scientists Boost Cloud Speed with Gigaflow - Knowridge
                      </Link>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>

            {/* SlowPath - SIGCOMM CCR 2023 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/d99e387a2dfe4fdf852492e2df21757d/original/slowpath.png"
                  alt="SlowPath"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    SIGCOMM CCR 2023
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    The Slow Path Needs An Accelerator Too!
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    <em>Annus Zulfiqar</em>, Ben Pfaff, William Tu, Gianni Antichi, Muhammad Shahbaz
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://dl.acm.org/doi/abs/10.1145/3594255.3594259" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

            {/* Homunculus - ASPLOS 2023 */}
            <Grid templateColumns={{ base: '1fr', md: '35% 65%' }} gap={6} alignItems="start" mb={10}>
              <GridItem>
                <Image
                  src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/51p6258lbb2jz2i/8967dfa4b0a34f2a81812ed321ce7b28/original/homunculus.png"
                  alt="Homunculus"
                  borderRadius="md"
                  w="100%"
                  h="300px"
                  objectFit="contain"
                  objectPosition="top"
                />
              </GridItem>
              <GridItem>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" fontSize="xl" fontWeight="900" color="gray.900">
                    ASPLOS 2023
                  </Heading>
                  <Heading as="h4" fontSize="lg" fontWeight="900" color="gray.900">
                    Homunculus: Auto-Generating Efficient Data-Plane ML Pipelines for Datacenter Networks
                  </Heading>
                  <Text fontSize="md" fontWeight="bold">
                    Tushar Swamy, <em>Annus Zulfiqar</em>, Luigi Nardi, Muhammad Shahbaz, Kunle Olukotun
                  </Text>
                  <Badge colorScheme="orange" fontSize="xs" mb={1}>
                    🎖️ Distinguished Artifact Award
                  </Badge>
                  <HStack spacing={2} flexWrap="wrap">
                    <Link href="https://dl.acm.org/doi/10.1145/3582016.3582022" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Paper
                    </Link>
                    <Link href="https://gitlab.com/dataplane-ai/homunculus/artifact-asplos23" isExternal
                      bg="gray.800" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="medium"
                      _hover={{ bg: "gray.700" }} display="inline-block">
                      Code
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>

        </VStack>
      </Container>
    </Box>
  )
}
