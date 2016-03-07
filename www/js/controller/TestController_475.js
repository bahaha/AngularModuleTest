module.exports= function($scope, $state, TestService){
		console.log('enter controller_475')
		$scope.test = TestService.getTest()
	}
